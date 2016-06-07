/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
*/

function translatePigLatin(str) {
  var array = str.split("");
  var firstVowel = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].match(/[aeiouAEIOU]/)) {
      firstVowel = array.indexOf(array[i]);
      break;
    }
  }

  if (array[0].match(/[aeiouAEIOU]/)) {
    array.push("way");
    array = array.join("");
  } else {
    var consonant = array.slice(0, firstVowel);
    array.splice(0, 0 + firstVowel);
    array = array.concat(consonant);
    array.push('ay');
    array = array.join("");
  }

  return array;
}

translatePigLatin("consonant");
