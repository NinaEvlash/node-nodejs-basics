import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');

  try {
    await pipeline(
      createReadStream(filePath),
      hash
    );
    const result = hash.digest('hex');
    console.log('SHA256 hash:', result);
  } catch (err) {
    console.error('Error while calculating hash:', err);
  }
};

await calculateHash();
