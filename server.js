const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Tyler Tucker</title></head>');
    res.write('<body><h1>Tyler Tucker</h1></body>');
    res.write('</html>');
});

server.listen(3000);