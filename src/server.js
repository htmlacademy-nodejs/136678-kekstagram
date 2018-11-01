'use strict';

const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);
const path = require(`path`);
const {promisify} = require(`util`);

const HOSTNAME = `127.0.0.1`;
const DEFAULT_PORT = 3000;
const PORT = process.argv[3] || DEFAULT_PORT;

const readfile = promisify(fs.readFile);

const contentType = {
  html: `text/html; charset=UTF-8`,
  css: `text/css`,
  js: `application/javascript`,
  ico: `image/x-icon`,
  jpg: `image/jpeg`,
  jpeg: `image/jpeg`,
  png: `image/png`,
  gif: `image/gif`,
};

const readFile = async (pathValue, res) => {
  const data = await readfile(pathValue);
  const ext = path.extname(pathValue).slice(1);
  const type = contentType[ext] ? contentType[ext] : `text/plain`;
  res.setHeader(`content-type`, type);
  res.end(data);
};

const server = http.createServer((req, res) => {
  let {pathname} = url.parse(req.url);
  if (pathname === `/`) {
    pathname = `/index.html`;
  }

  const absolutePath = `${__dirname}/../static${pathname}`;

  (async () => {
    try {
      await readFile(absolutePath, res);
      res.statusCode = 200;
      res.statusMessage = `OK`;
    } catch (e) {
      res.writeHead(404, `Not Found`);
      res.end();
    }
  })().catch((e) => {
    res.writeHead(500, e.message, {
      'content-type': `text/plain`
    });
    res.end(e.message);
  });
});

const startServer = () => {
  server.listen(PORT, HOSTNAME, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  });
};

module.exports = {
  start: startServer
};
