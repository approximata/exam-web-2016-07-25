'use strict';


var decrypter = function(){
  var abcLen = 26;
  var abcStartC = 65;
  var abcEndC = 90;
  var abcStart = 97;
  var abcEnd = 122;

  var outOfBound = {
    "status": "error",
    "error": "Shift is out of bound"
  };

  var inputMissing = {
    "status": "error",
    "error": "Missing input"
  };

  function checkText(text, shift) {
    if (shift < -25 || shift > 25) {
      return outOfBound;
    }
    else if ((text ==='') || (shift ==='')) {
      return inputMissing;
    }
    else {
      return true;
    }
  }

  function charMover(start, charCode, shift) {
    return String.fromCharCode(((charCode - start - shift % abcLen) + abcLen) % abcLen + start);
  }

  function decodeEngie(text, shift) {
    var encodedText = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        var charCode = text.charCodeAt(i);
        if ((charCode >= abcStart) && (charCode <= abcEnd)) {
          char = charMover(abcStart, charCode, shift);
        } else if ((charCode >= abcStartC) && (charCode <= abcEndC)) {
          char = charMover(abcStartC, charCode, shift);
        }
      }
      encodedText += char;
    }
    return { "status": "ok", "text": encodedText}
  }

  function textEncoder(input, callback) {
    if (checkText(input.encrypt, input.shift)) {
      callback(decodeEngie(input.encrypt, input.shift));
    }
    else {
      callback(checkText(input.encrypt, input.shift));
    }
  }

  return {
    textEncoder: textEncoder,
    decodeEngie: decodeEngie,
    checkText: checkText

  }
};

module.exports = decrypter;
