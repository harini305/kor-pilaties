// Generates resized local derivatives from the audited originals.
// Originals in docs/source-audit/original-assets are read only, never modified.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'docs/source-audit/original-assets';
const OUT = 'public/images';

const jobs = [
  { src: 'home/hero-studio-interior.jpg', out: 'hero-studio', widths: [640, 1024, 1600, 2400] },
  { src: 'locations/kor-bali-studio.jpeg', out: 'studio-berawa', widths: [480, 745] },
  { src: 'classes/reformer-abs-n-ass.jpg', out: 'class-reformer-abs-n-ass', widths: [640, 1200] },
  { src: 'classes/reformer-strength.jpg', out: 'class-reformer-strength', widths: [640, 1200] },
  { src: 'classes/reformer-flow.jpg', out: 'class-reformer-flow', widths: [480, 702] },
  { src: 'classes/mat-flow.jpg', out: 'class-mat-flow', widths: [640, 1200, 1800] },
  { src: 'classes/1-on-1-private-reformer.jpeg', out: 'class-private-reformer', widths: [640, 1200] },
  { src: 'team/june-louie.jpg', out: 'team-june-louie', widths: [400, 800] },
  { src: 'team/charlotte-oktaviana-chandra.jpg', out: 'team-charlotte-oktaviana-chandra', widths: [400, 800] },
  { src: 'team/xavier-fabrega.jpg', out: 'team-xavier-fabrega', widths: [400, 800] },
  { src: 'team/christophe-blanc.jpeg', out: 'team-christophe-blanc', widths: [400, 800] },
  { src: 'team/fiona-palumbo.jpg', out: 'team-fiona-palumbo', widths: [400, 800] },
  { src: 'team/audrey-hamel.jpeg', out: 'team-audrey-hamel', widths: [400, 800] },
  { src: 'team/maria-chaikovskaia.jpg', out: 'team-maria-chaikovskaia', widths: [400, 800] },
];

await mkdir(OUT, { recursive: true });
await mkdir('public/brand', { recursive: true });

const report = {};
for (const job of jobs) {
  const input = path.join(SRC, job.src);
  const meta = await sharp(input).metadata();
  report[job.out] = { ratio: +(meta.width / meta.height).toFixed(4), widths: [] };
  for (const w of job.widths) {
    const width = Math.min(w, meta.width);
    const file = `${job.out}-${width}.webp`;
    const info = await sharp(input).rotate().resize({ width }).webp({ quality: 74 }).toFile(path.join(OUT, file));
    report[job.out].widths.push(width);
    console.log(file, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
  }
}
// Width/ratio data is read at build time only, so it lives outside public/.
await writeFile('data/image-manifest.json', JSON.stringify(report, null, 1));

// Open Graph image from the hero photo.
await sharp(path.join(SRC, 'home/hero-studio-interior.jpg'))
  .resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 70, mozjpeg: true }).toFile('public/og-image.jpg');

// Logos: crop the generous padding from the originals.
const white = await sharp(path.join(SRC, 'brand/kor-logo-white.png')).trim().toBuffer();
await sharp(white).resize({ height: 160 }).webp({ quality: 90, alphaQuality: 100 }).toFile('public/brand/kor-logo-white.webp');
console.log('white logo', await sharp('public/brand/kor-logo-white.webp').metadata().then(m => m.width + 'x' + m.height));

// Favicon / app icons: white mark on black square.
const mark = await sharp(white).resize({ width: 380, height: 380, fit: 'inside' }).toBuffer();
const icon = sharp({ create: { width: 512, height: 512, channels: 4, background: '#000000' } })
  .composite([{ input: mark, gravity: 'center' }]).png();
await icon.clone().toFile('app/icon.png');
await sharp(await icon.toBuffer()).resize(180).toFile('app/apple-icon.png');
console.log('done');
