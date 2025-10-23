const parseEnv = () => {
  const envObj = process.env;
  const arr = Object.entries(envObj).filter(([key]) => key.startsWith('RSS_'));
  const arrString = arr.map(([key, value]) => `${key} = ${value}`);
  const result = arrString.join('; ')
  console.log(result);
};

parseEnv();
