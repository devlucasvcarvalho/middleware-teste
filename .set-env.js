const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envConfig = `export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  apiKey: '${process.env.NG_APP_API_KEY}'
};`;

fs.writeFileSync('./src/environments/environment.ts', envConfig);
