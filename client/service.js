'use strict';

/* global someFunction xhrhandler: true */

var url = 'http://localhost:3000/decode/';
var inputField = document.querySelector('.input');
var inputShift = document.querySelector('.shift');

var service = (function() {

  function dataToSend() {
    return JSON.stringify(
      {
        "shift": inputShift.value,
        "text": inputField.value
      });
  }

  function dataToSendCheck() {
    return ((inputShift.value > 25 || inputShift.value < -25) || +
    (inputShift.value === '' || inputField.value === ''));
  }

  function manageRequest(callback) {
    if(dataToSendCheck()){
      alert("Please give me a proper value");
      return manageRequest;
    }
    var method = 'POST';
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, url, dataToSend(), type, callback);
  }

  return {
    manageRequest : manageRequest
  }
})();
