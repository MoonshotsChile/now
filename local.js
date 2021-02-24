var express = require('express');
var swig = require('swig');
var path = require('path');
var app = express();
const bodyParser = require("body-parser")

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

var server = app.listen(4000, function () {
   var host = server.address().address
   console.log(host)
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
