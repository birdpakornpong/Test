var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./routes/DOSCG');
var app = express();
var controller = require('./controllers/DOSCGController'); 
app.set ( "view engine", "ejs" );
app.use('/', users);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','*')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
 })
app.get('/api/XYZvalue',controller.getXYZvalue);
app.get('/api/BCvalue',controller.getBCvalue);

app.listen(3000, () => console.log('server run listening on port 3000'));