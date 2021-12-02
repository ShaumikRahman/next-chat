const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>hello world</h1>');
});

server.listen('8080', () => {
    console.log('server running');
});