/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var firstNum = str.charCodeAt(0);

  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str.charCodeAt(i) !== firstNum + i) {
      return String.fromCharCode(firstNum + i);
    }

  }
  return undefined;
}

fearNotLetter("abce");
