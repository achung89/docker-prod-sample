var express = require('express');
var db = require('./db/db.js');
var app = express();
var configuredRouter = require('./router')(express);


var query = function (query) {

  return new Promise(function(resolve,reject){

    db.query(query, ( err, results ) => {

      if(err) reject(err);
      resolve(results)
    });
  })
}
query('SHOW DATABASES').then((results) => {
    console.log('databases',results);
    return query('SHOW TABLES');
  }).then((results) => {
  console.log('tables',results);
  return query('INSERT INTO hellos ( casual, formal ) VALUES ( "waddup", "hello" );')
  }).then((results) => {
    console.log(results);
    return query('SELECT * FROM hellos');
  }).then((results) => {
    console.log(results);
  }).catch((err) => {
    throw err;
  })

app.use('/', configuredRouter );

app.listen(8080, ()=>{
  console.log('Server listening on port 8080');
})