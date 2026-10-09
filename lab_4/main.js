import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const url = req.url
  const method = req.method

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let content = '404'
  const menu = `
  <a href="/">Main</a>
  <a href="/second">Second</a>
`;

  if (url === '/' && method === 'GET') {

    content = (menu + '<div class="one">Main page</div>');
  }
  if (url === '/second' && method === 'GET') {
    content = menu + '<div class="one">Second page</div>';
  }
  res.statusCode = 404;
  res.end(content)
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});