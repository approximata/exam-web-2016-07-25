'use strict';

var test = require('tape');
var decrypter = require('./decrypt');

var myDecrypter = decrypter();

test('test with positive shift value', function (t) {
  t.deepEqual(myDecrypter.decodeEngie('oruhp lsvxp groru vlw', 3).text, ('lorem ipsum dolor sit'));
  t.end();
});

test('test with negative shift value', function (t) {
  t.deepEqual(myDecrypter.decodeEngie('jhbscdc', -4).text, ('nlfwghg'));
  t.end();
});

test('test with capital', function (t) {
  t.deepEqual(myDecrypter.decodeEngie('aaAAcC', 1).text, ('zzZZbB'));
  t.end();
});

test('test text with special characters and numbers', function (t) {
  t.deepEqual(myDecrypter.decodeEngie('&???1', 5).text, ('&???1'));
  t.end();
});

test('test text with mixed characters', function (t) {
  t.deepEqual(myDecrypter.decodeEngie('Hw wx pl ilol, Euxwh?', 3).text, ('Et tu mi fili, Brute?'));
  t.end();
});

test('empty text test', function (t) {
  t.deepEqual(myDecrypter.checkText('', 3).error, ('Missing input'));
  t.end();
});

test('empty shift test', function (t) {
  t.deepEqual(myDecrypter.checkText('foo', '').error, ('Missing input'));
  t.end();
});

test('out of boundn positive', function (t) {
  t.deepEqual(myDecrypter.checkText('Ize', 67).error, ('Shift is out of bound'));
  t.end();
});

test('out of boundn negative', function (t) {
  t.deepEqual(myDecrypter.checkText('Ize', -32).error, ('Shift is out of bound'));
  t.end();
});
