var path = require('path');
module.exports = function(express) {

  var router = express.Router();

  router.use(express.static(path.join( __dirname, '../client')));
  router.get('/',(req,res)=>{ 
    console.log('index.html request')
    res.sendFile(path.join(__dirname,'../client', 'index.html'))
  });
  
  return router;
}