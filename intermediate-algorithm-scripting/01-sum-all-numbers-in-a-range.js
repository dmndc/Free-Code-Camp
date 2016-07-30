/*
Return the sum of those two numbers and all numbers between them.
 */

function sumAll(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var total = 0;

  for (var i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

sumAll([1, 4]);
