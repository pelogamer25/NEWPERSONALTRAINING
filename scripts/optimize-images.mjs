/**
 * Comprime los assets de public/images y genera la imagen Open Graph.
 *
 * Motivo: clase-grupal-ritmica.jpg pesaba 8,87 MB (unas 300 veces lo razonable)
 * y la imagen OG declarada como 1200×630 era en realidad el logo de 576×557,
 * así que las tarjetas de WhatsApp y redes salían recortadas.
 *
 * Uso: npm run optimize:images
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(root, 'public', 'images');
const publicDir = path.join(root, 'public');

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function optimizeDirectory() {
  const entries = await fs.readdir(imagesDir);
  const sources = entries.filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of sources) {
    const inputPath = path.join(imagesDir, file);
    const { size: beforeSize } = await fs.stat(inputPath);
    const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);

    const image = sharp(inputPath);
    const { width } = await image.metadata();

    await image
      .resize({ width: Math.min(width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    const { size: afterSize } = await fs.stat(outputPath);
    const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1);
    console.log(`${file}  ${kb(beforeSize)} → ${path.basename(outputPath)}  ${kb(afterSize)}  (-${saved}%)`);
  }
}

/** Imagen Open Graph real de 1200×630 sobre el fondo de marca. */
async function buildOgImage() {
  const width = 1200;
  const height = 630;

  const logo = await sharp(path.join(publicDir, 'logo.png'))
    .resize({ width: 260, withoutEnlargement: true })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#D00000" stop-opacity="0.28" />
          <stop offset="60%" stop-color="#050505" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#050505" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />
      <rect x="0" y="${height - 10}" width="${width}" height="10" fill="#D00000" />
      <text x="80" y="400" font-family="Montserrat, Arial, sans-serif" font-size="70"
            font-weight="900" font-style="italic" fill="#FFFFFF">ENTRENADORES PERSONALES</text>
      <text x="80" y="480" font-family="Montserrat, Arial, sans-serif" font-size="70"
            font-weight="900" font-style="italic" fill="#D00000">EN MEDELLÍN</text>
      <text x="80" y="545" font-family="Inter, Arial, sans-serif" font-size="30"
            fill="#A3A3A3">Desde 2014 · 50+ profesionales · Valle de Aburrá</text>
    </svg>
  `);

  const outputPath = path.join(publicDir, 'og-image.jpg');
  await sharp({
    create: { width, height, channels: 3, background: '#050505' },
  })
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logo, top: 70, left: 80 },
    ])
    .jpeg({ quality: 88 })
    .toFile(outputPath);

  const { size } = await fs.stat(outputPath);
  console.log(`og-image.jpg  1200×630  ${kb(size)}`);
}

await optimizeDirectory();
await buildOgImage();
