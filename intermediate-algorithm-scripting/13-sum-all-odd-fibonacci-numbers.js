/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/


function sumFibs(num) {
  var array = [];
  var sum = 0;

  array[0] = 1;
  array [1] = 1;

  for (var i = 2; i < num; i++) {
    var pairSum =  array[i-2] + array[i-1];

    if (pairSum <= num) {
      array[i] = pairSum;
    }
  }

  array.forEach(function(item) {
    if (item % 2 !== 0 && array.indexOf(item) !== -1) {
      sum = sum + item;
    }
  });

  return sum;
}

sumFibs(4);
