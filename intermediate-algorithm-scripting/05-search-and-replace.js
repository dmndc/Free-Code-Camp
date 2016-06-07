/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
  str = str.split(" ");
  var index = str.indexOf(before);

  if (before[0] == before[0].toUpperCase()) {
   after = after.charAt(0).toUpperCase() + after.substr(1);
  }

  str.splice(index, 1, after);
  str = str.join(" ");

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
