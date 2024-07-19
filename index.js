var express = require('express')
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
})


var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}))