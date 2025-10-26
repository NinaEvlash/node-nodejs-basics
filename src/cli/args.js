const parseArgs = () => {
  const argsObj = process.argv.slice(2);
  const arrRes = [];

  for (let i = 0; i < argsObj.length - 1; i += 2) {
    const propName = argsObj[i].replace(/^--/, '');
    const value = argsObj[i+1];
    arrRes.push(`${propName} is ${value}`);
  }

  const result = arrRes.join(', ');
  console.log(result);
};

parseArgs();
