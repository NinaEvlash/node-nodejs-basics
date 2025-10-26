import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const filePathA = path.join(__dirname, 'files', 'archive.gz');
  const filePathB = path.join(__dirname, 'files', 'fileToCompress.txt');
  
  const readFile = fs.createReadStream(filePathA);
  const writeFile = fs.createWriteStream(filePathB);
  const gzip = zlib.createGunzip();
  
  await pipeline(readFile, gzip, writeFile);

  console.log('File successfully unpacked!');
};

await decompress();
