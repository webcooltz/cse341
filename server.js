const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;

// route declaration
const index = require('./routes');

var app = express();

app.set("port", port);

// route redirection
app.use('/', index);

// 404
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'dist/pages/404.html'));
    res.send('404: oops, bad request!');
  });

const server = http.createServer(app);

server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});