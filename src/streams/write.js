import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { stdin, stdout } from 'process';

const write = async () => {
  const resultStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedStr = chunk.toString().trim().split('').reverse().join('') + '\n';
      callback(null, reversedStr);
    }
  });

  console.log('Enter your text and press key "Enter" when finished. To finish, press "Ctrl + C"');

  await pipeline(stdin, resultStream, stdout);
};

await write();
