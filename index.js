const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/login') {
    res.statusCode = 200;
    res.end('You have successfully logged in\n');
  } else {
    res.statusCode = 200;
    res.end('Hello, this is a basic web app!\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
