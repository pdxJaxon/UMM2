if (!process.env.NODE_ENV) {
  throw new Error("Must define NODE_ENV before starting");
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

console.log(`Listening on ${port} in ${process.env.NODE_ENV}`)

server.listen(port);
