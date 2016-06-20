/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // &colon;&rpar;
  var re = /\&|<|>|"|'/g;
  var newstr = str.replace(re, replacer);

  function replacer(match) {
   switch (match) {
     case "&": return "&amp;";
     case "<": return "&lt;";
     case ">": return "&gt;";
     case "\"": return "&quot;";
     case "'": return "&apos;";
   }
  }

  return newstr;
}

convertHTML("Dolce & Gabbana");
