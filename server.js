const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var logger = require('morgan');

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING,
   { useNewUrlParser: true }, (err, res) => {
      if (err) {
         console.log('Connection failed: ' + err);
      }
      else {
         // console.log(mongoose.Connection.toString());
         console.log('Connected to database!');
      }
   }
);

const index = require('./routes');

var app = express();

app.set("port", port);

app.use('/', index);

// 404
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'dist/pages/404.html'));
    res.send('404: oops, bad request!');
  });

app.use(logger('dev')); // Tell express to use the Morgan logger

// support for CORS
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.setHeader(
     'Access-Control-Allow-Methods',
     'GET, POST, PATCH, PUT, DELETE, OPTIONS'
   );
   next();
 });

const server = http.createServer(app);

server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});