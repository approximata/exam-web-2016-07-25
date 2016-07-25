'use strict';

var domManager = (function() {
  var domResultField =  document.querySelector("p");

  function clearDom() {
    inputField.value = '';
    inputShift.value = '';
  }


  function fillContent(input) {
    domResultField.textContent = 'Input: ' + inputField.value + ' ' + 'result: ' + input.text;
    clearDom()
  }

  return {
    fillContent: fillContent,

  };
})();
