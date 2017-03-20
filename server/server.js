var express = require('express');

var app = express();
var configuredRouter = require('./router')(express);

app.use('/', configuredRouter );

app.listen(8080, ()=>{
  console.log('Server listening on port 8080');
})