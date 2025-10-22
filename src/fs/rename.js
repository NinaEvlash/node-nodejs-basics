import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
      await fs.access(newPath);
      throw new Error('FS operation failed! New file already exists');
    } catch(err) {
      if (err.code !== 'ENOENT') {
        console.error('Unexpected error:', err);
        return;
      }
       try {
        await fs.access(oldPath);
        await fs.rename(oldPath, newPath);
        console.log('The file has been renamed successfully!');
      } catch (err) {
        if (err.code === 'ENOENT') {
        console.error('FS operation failed! Original file does not exist.');
      } else {
        console.error('Unexpected error during rename:', err);
      }
    }
    }
};

await rename();
