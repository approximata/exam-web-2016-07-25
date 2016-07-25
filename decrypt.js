'use strict';

function textEncoder(input) {
  console.log(input.encrypt + input.shift + 'textEncoder');
  var result = decodeEngie(input.encrypt, input.shift);
  return result;
}



function decodeEngie(text, shift) {
    if (shift < 0) {
      return 'give me something else';
    }
    var encodedText = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        var charCode = text.charCodeAt(i);
        if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 - shift % 26) + 26) % 26 + 65);
        } else if ((charCode >= 97) && (charCode <= 122)) {
          char =
          String.fromCharCode(((charCode - 97 - shift % 26) + 26) % 26 + 97);
        }
      }
      encodedText += char;
    }
  return encodedText;
}

module.exports = {
  textEncoder : textEncoder,
}
