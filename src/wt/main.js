import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads'; 
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'worker.js');
const numCPUs = os.cpus().length; 
const baseNumber = 10;

const runWorker = (n) => { 
  return new Promise((resolve) => {
    const worker = new Worker(filePath, { 
      workerData: n,
    });
    worker.on('message', (message) => {
      resolve({ status: message.status, data: message.data, });
    }); 
    worker.on('error', () => {
      resolve({ status: 'error', data: null, });
    });
  });
};

const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < numCPUs; i++) {
    const n = baseNumber + i;
    promises.push(runWorker(n));
  }
  const results = await Promise.all(promises);
  console.log('Results:', results);
};

await performCalculations();
