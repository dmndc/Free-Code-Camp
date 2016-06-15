/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
*/

function sym() {
  var args = Array.prototype.slice.call(arguments);

  function diff(arr1, arr2) {
    var nums = [];

    arr1.forEach(function(item) {
      if (!arr2.includes(item) && !nums.includes(item)) {
        nums.push(item);
      }
    });

    arr2.forEach(function(item) {
      if (!arr1.includes(item) && !nums.includes(item)) {
        nums.push(item);
      }
    });

    return nums.sort();
  }

  return args.reduce(diff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
