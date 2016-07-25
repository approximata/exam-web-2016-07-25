'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var decrypt = require('./decrypt');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));


app.post('/decode', function(req, res){
  var toEncrypt = {
    encrypt: req.body.text,
    shift: req.body.shift,
  };
  console.log(toEncrypt + 'poston kulso elott');
  var decrypted = decrypt.textEncoder(toEncrypt);
  console.log(decrypted + 'poston ');
  res.json({ "status": "ok", "text": decrypted});
});


// decrypter.decryptText(toEncrypt)

// app.delete('/meals/:id', function(req, res){
//
//   var newtodo = todolist.filter(function (e){
//       return e.id !== +req.params.id
//   });
//
//   var filtered = todolist.filter(function (e){
//       if(e.id === +req.params.id){
//         e.destroyed = true;
//         todolist = newtodo;
//         return e;
//       }
//   })[0];
//   // res.json(filtered);
//   errorHandling(res, filtered);
// });
//
// function errorHandling(res, item) {
//  if (item === undefined) {
//    res.sendStatus(404);
//  } else {
//    res.json(item);
//  }
// }

app.listen(3000);