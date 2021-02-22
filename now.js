var express = require('express');
var swig = require('swig');
var path = require('path');
var app = express();
const bodyParser = require("body-parser")
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

app.post('/webhook', (request, response) => {
  const { body } = request;
  console.log(body);

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

var server = app.listen(6000, function () {
   var host = server.address().address
   console.log(host)
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
