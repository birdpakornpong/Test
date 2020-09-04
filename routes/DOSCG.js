var express = require('express');
var router = express.Router();
var cache = require('memory-cache');
var controller = require('../controllers/DOSCGController'); 

// test cache
router.get('/', controller.getDOSCGPage);
router.get ( '/google', function ( req, res, next ) 
	{
		res.render ( 'googlemap' );		
	}
)


module.exports = router;