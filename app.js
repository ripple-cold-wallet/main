var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var rippleKeyPairs = require("ripple-keypairs");
var app = express();


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//use middleware
app.use(bodyParser());

//define routes

var todoItems = [
                { id: 1, desc: 'foo' },
                { id: 2, desc: 'bar'},
                { id: 3, desc: 'baz'}
              ];

              var secret = null;
              var keypair = null;
              var address = null;


app.get('/', function(req, res){
  res.render('index', {
    title: 'My App',
    items: todoItems
  });
});

app.post('/add', function(req, res){
  var newItem = req.body.newItem;
  console.log(newItem);
  todoItems.push({
    id: todoItems.length + 1,
    desc: newItem
  });


secret = rippleKeyPairs.generateSeed();
var keypair = rippleKeyPairs.deriveKeypair(secret);
var address = rippleKeyPairs.deriveAddress(keypair.publicKey);
console.log("secret: " + secret + "\naddress: " + address)


  res.redirect('/');
});

var port = process.env.PORT || 1337;
app.listen(port, function(){
  console.log('ready on port ' + port);
});




// var http = require('http');
// http.createServer(function (req, res){
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
