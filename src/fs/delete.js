import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
      await fs.unlink(filePath);
      console.log('File successfully deleted!');
    } catch(err) {
       if (err.code === 'ENOENT') {
        throw new Error('FS operation failed!');
      }
      throw err;
    }
};

await remove();
