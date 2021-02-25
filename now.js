var express = require('express');
var swig = require('swig');
var path = require('path');
var app = express();
const bodyParser = require("body-parser")
const Fintoc = require('fintoc');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var routes = require('./routes/index');

app.engine('html',swig.renderFile);

app.set('view engine','html');
app.set('views',path.join(__dirname, 'views'));
app.set('view cache',false);
swig.setDefaults({ cache: false });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/accounts', function(req, res){

  const client = new Fintoc('sk_live_xdsA2pD7HkGUbYJsvwazcpxzrUUyzxMV');

  client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
  .then((link) => {
    res.json(link);
  })
  .catch(console.log);

});


app.post('/webhook', (request, response) => {
  const { body } = request;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("now");
 
    dbo.collection("account").insertOne(body, function(err, res) {
      if (err) throw err;
      console.log("1 documento insertado");
      db.close();
    });
  });
});

router.get('/hola', function(req, res){
	res.json(req.query);
});

var server = app.listen(6000, function () {
   var host = server.address().address
   console.log(host)
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
