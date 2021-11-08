



const http = require('http');

const requestListener =function (req, res) {

  switch (true) {
    case req.url === '/' && req.method === 'GET':
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(200);
      res.end('Ami itt látható a címlap <a href ="/bejelentkezes">Ahova visz href neve pl bejelentkezés </a>');
      break;

    case req.url === '/bejelentkezes' && req.method === 'GET':
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(200);
      res.end('Bejelentkezés helye ez az oldal <a href ="/">Címlap vagy a href neve ahova visz</a>');
      break;

    default:
      res.setHeader('content-type', 'text/html;charset=utf-8');
      res.writeHead(404);
      res.end('Oldal nem található');

  }
  
console.log(res.status)
}




const server = http.createServer(requestListener);

server.listen(8080)
