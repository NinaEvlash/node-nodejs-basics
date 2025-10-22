import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const folderPath = path.join(__dirname, 'files');
  const copyFolderPath = path.join(__dirname, 'files_copy');

  try {
      await fs.access(copyFolderPath);
      throw new Error('FS operation failed!');
    } catch(err) {
       if (err.code === 'ENOENT') {
        await fs.mkdir(copyFolderPath, { recursive: true });
        await fs.cp(folderPath, copyFolderPath, { recursive: true });
        console.log('The folder has been created successfully!');
      } else {
        console.log('Unexpected error:', err);
      }
    }
};

await copy();
