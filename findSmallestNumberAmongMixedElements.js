


var mixted = [5,"hola", 4, "tres", 7];
function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  
  var len = arr.length;
  var min = Infinity;
  while(len--){
  if(arr[len] < min){
       min = arr[len];
  }

  }
   return min;
   console.log(mixted);
}
module.exports = findSmallestNumberAmongMixedElements(mixted);
