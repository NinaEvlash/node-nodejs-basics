import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');
  const data = 'I am fresh and young';

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed!');
  } catch(err) {
     if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, data);
      console.log('The file has been created successfully!');
    } else {
      console.log('Unexpected error:', err);
    }
  }
};

await create();
