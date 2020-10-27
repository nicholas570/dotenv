const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 3000;
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

const server = http.createServer((req, res) => {
  res.statusCode(200);
  res.setHeader('Content-Type', 'application/json');
});

server.listen(() => {
  console.log(`I am ${name}, wilder in ${city}, and I love ${language}`);
});
