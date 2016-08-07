/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

 function updateInventory(arr1, arr2) {

   var result = [];
   var toRemove = [];

   arr2.forEach(function(item) {

     for (var i = 0; i < arr1.length; i++) {
       if (arr1[i][1] === item[1]) {
         arr1[i][0] = arr1[i][0] + item[0];
         toRemove.push(i);
       }
     }

   });

   toRemove.forEach(function(pos) {
     arr2.splice(pos, 1);
   });

   result = arr1.concat(arr2);

   return result.sort(function (a, b) {
     if(a[1] < b[1]) return -1;
     if(a[1] > b[1]) return 1;
     return 0;
   });

 }

 // Example inventory lists
 var curInv = [
     [21, "Bowling Ball"],
     [2, "Dirty Sock"],
     [1, "Hair Pin"],
     [5, "Microphone"]
 ];

 var newInv = [
     [2, "Hair Pin"],
     [3, "Half-Eaten Apple"],
     [67, "Bowling Ball"],
     [7, "Toothpaste"]
 ];

 updateInventory(curInv, newInv);
