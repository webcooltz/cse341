const express = require('express');
const http = require('http');
const debug = require('debug')('node');

// routes
const index = require('./routes');

var app = express();

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
  };

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
        case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
        default:
        throw error;
    }
};

// which route it will take depending on the url entered
app.use('/', index);

// 404
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'dist/pages/404.html'));
    res.send('404: oops, bad request!');
  });

const port = 3000;
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);

server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});