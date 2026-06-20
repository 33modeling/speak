import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const iconDir = fileURLToPath(new URL('../public/icons/', import.meta.url));

const colors = {
  teal: [31, 111, 120, 255],
  tealDark: [23, 63, 70, 255],
  cream: [255, 253, 248, 255],
  yellow: [241, 207, 109, 255],
  red: [178, 76, 47, 255],
};

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function blend(from, to, t) {
  return [
    lerp(from[0], to[0], t),
    lerp(from[1], to[1], t),
    lerp(from[2], to[2], t),
    255,
  ];
}

function inRoundedRect(x, y, left, top, width, height, radius) {
  const right = left + width;
  const bottom = top + height;
  const cx = x < left + radius ? left + radius : x > right - radius ? right - radius : x;
  const cy = y < top + radius ? top + radius : y > bottom - radius ? bottom - radius : y;
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

function inCircle(x, y, cx, cy, radius) {
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

function drawIcon(size, maskable = false) {
  const bytesPerPixel = 4;
  const rowLength = size * bytesPerPixel + 1;
  const raw = Buffer.alloc(rowLength * size);
  const safeInset = maskable ? size * 0.16 : size * 0.08;

  for (let y = 0; y < size; y += 1) {
    raw[y * rowLength] = 0;
    for (let x = 0; x < size; x += 1) {
      const offset = y * rowLength + 1 + x * bytesPerPixel;
      const grad = (x + y) / (size * 2);
      let color = blend(colors.teal, colors.tealDark, grad);

      const plate = inRoundedRect(
        x,
        y,
        safeInset,
        safeInset,
        size - safeInset * 2,
        size - safeInset * 2,
        size * 0.12,
      );
      if (!maskable && !plate) {
        color = [0, 0, 0, 0];
      }

      const cx = size / 2;
      const headY = size * 0.4;
      const bodyY = size * 0.66;
      const micX = size * 0.66;
      const micY = size * 0.55;

      if (inCircle(x, y, cx, headY, size * 0.12)) color = colors.cream;
      if (inCircle(x, y, cx, bodyY, size * 0.18)) color = colors.yellow;
      if (inRoundedRect(x, y, micX - size * 0.035, micY - size * 0.17, size * 0.07, size * 0.28, size * 0.035)) {
        color = colors.cream;
      }
      if (inRoundedRect(x, y, micX - size * 0.07, micY + size * 0.09, size * 0.14, size * 0.035, size * 0.018)) {
        color = colors.cream;
      }
      if (inRoundedRect(x, y, micX - size * 0.014, micY + size * 0.1, size * 0.028, size * 0.11, size * 0.014)) {
        color = colors.cream;
      }
      if (inCircle(x, y, size * 0.35, size * 0.38, size * 0.035)) color = colors.red;
      if (inCircle(x, y, size * 0.65, size * 0.38, size * 0.035)) color = colors.red;

      raw[offset] = color[0];
      raw[offset + 1] = color[1];
      raw[offset + 2] = color[2];
      raw[offset + 3] = color[3];
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(iconDir, { recursive: true });
writeFileSync(`${iconDir}/icon-192.png`, drawIcon(192));
writeFileSync(`${iconDir}/icon-512.png`, drawIcon(512));
writeFileSync(`${iconDir}/maskable-512.png`, drawIcon(512, true));

console.log(`Generated PWA icons in ${dirname(`${iconDir}/icon-192.png`)}`);
