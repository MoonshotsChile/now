var express		= require('express');
var app			= express()
var router 		= express.Router();
const axios     = require('axios');


/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/next', function(req, res){
	console.log(req.query);
	res.render('next', { params: req.query });

});

router.get('/portateaqui', function(req, res){
	res.render('portateaqui');
});

router.get('/haztecliente', function(req, res){
	res.render('haztecliente');
});

router.get('/conectarcuenta', function(req, res){
	res.render('conectarcuenta');
});



module.exports = router;
