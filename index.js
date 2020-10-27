const http = require('http');
require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;
const name = process.env.NAME;

const server = http.createServer((req, res) => {
  res.statusCode(200);
  res.setHeader('Content-Type', 'application/json');
});

server.listen(port, host, name, () => {
  console.log(`Hello ${name}, server listening on http//${host}:${port}`);
});
