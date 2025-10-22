import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
        const fileArr = await fs.readdir(folderPath);
        console.log(fileArr);
      } catch(err) {
         if (err.code === 'ENOENT') {
          throw new Error('FS operation failed!');
        }
        throw err;
      }
};

await list();
