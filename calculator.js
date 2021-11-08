



const http = require('http');

const requestListener =function (req, res) {

  switch (true) {
    case req.url === '/' && req.method === 'GET':
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(200);
      res.end('Címlap <a href ="/bejelenkezes">Bejelentkezés</a>');
      break;

    case req.url === '/bejelentkezes' && req.method === 'GET':
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(200);
      res.end('Bejelentkezés <a href ="/">Címlap</a>');
      break;

    default:
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(404);
      res.end('Oldal nem található');
  }

}




const server = http.createServer(requestListener);

server.listen(8080)
