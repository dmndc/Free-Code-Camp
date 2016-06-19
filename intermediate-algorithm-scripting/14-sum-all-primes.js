/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
The provided number may not be a prime.
*/


function sumPrimes(num) {
  var array = [];
  var sum = 0;

  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      array.push(j);
    }
  }

  console.log("Array " + array);


  array.forEach(function(item) {
    sum += item;
  });

  console.log("Sum: " + sum);
  return sum;
}


function isPrime(num) {

  for(var i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(num + " is not prime!");
      return false;
    }
  }
  console.log(num + " is prime!");
  return true;

}


sumPrimes(10);
