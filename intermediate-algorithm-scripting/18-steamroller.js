// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {

  var flat = [];

  function recursiveFlatten(arr) {
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        recursiveFlatten(arr[i]);
      } else {
        flat.push(arr[i]);
      }
    }
  }

  recursiveFlatten(arr);
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
