'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var decrypter = require('./decrypt');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));

var myDecrypter = decrypter();

app.post('/decode', function(req, res){
  var toEncrypt = {
    encrypt: req.body.text,
    shift: req.body.shift,
  };
  myDecrypter.textEncoder(toEncrypt, function(result){
    errorHandling(res, result);
  });
});

function errorHandling(res, result) {
 if (result.error) {
   res.status(400).json(result);
 } else {
   res.json(result);
 }
}

app.listen(3000);
