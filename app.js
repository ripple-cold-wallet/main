var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var rippleKeyPairs = require('ripple-keypairs');
var app = express();


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//use middleware
app.use(bodyParser());

//initialize variables
var secret = null;
var keypair = null;
var address = null;


//define routes
app.get('/', function(req, res){
  res.render('index', {
    address: address,
    secret: secret
  });
});

app.get('/generate', function(req, res, next) {
  secret = rippleKeyPairs.generateSeed();
  keypair = rippleKeyPairs.deriveKeypair(secret);
  address = rippleKeyPairs.deriveAddress(keypair.publicKey);
  console.log("secret: " + secret + "\naddress: " + address);
  res.json({ secret:  secret,
             address: address
          });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
