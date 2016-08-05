/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
 */

 function pairwise(arr, arg) {
   var indices = [];

   if (arr.length === 0) {
     return 0;
   }

   for (var i = 0; i < arr.length; i++) {
     for (var j = i + 1; j < arr.length; j++) {
       if (arr[i] + arr[j] === arg && indices.indexOf(i) === -1 && indices.indexOf(j) === -1) {
         indices.push(i, j);
       }
     }
   }

   return indices.reduce(function(prev, curr) {
     return prev + curr;
   });
   
 }

 pairwise([1,4,2,3,0,5], 7);
