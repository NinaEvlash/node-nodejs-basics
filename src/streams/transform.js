import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const content = createWriteStream(filePath);
  process.stdin.pipe(content);
  console.log('Enter your text and press key "Enter" when finished. To finish, press "Ctrl + C');
};

await transform();
