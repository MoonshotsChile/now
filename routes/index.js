var express		= require('express');
var app			= express()
var router 		= express.Router();
const axios     = require('axios');


/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/next', function(req, res){
	//res.json(req.query)
	/* 
	{
		"result":"link_created",
		"link_id":"V2byLzviMRKL0Wnw",
		"username":"138972496",
		"holder_type":"individual",
		"institution_id":"cl_banco_estado"
	}
	*/
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

router.get('/hola', function(req, res){
	res.render('hola');
});

module.exports = router;
