
var mixted = [5,"hola", 4, "tres", 7];
function getLongestWordOfMixedElements(arr) {
  // your code here
  
  var len = arr.length;
  var max = -Infinity;
  while(len--){
  if(arr[len] > max){
       max = arr[len];
  }

  }
   return max;
}
module.exports = getLongestWordOfMixedElements(mixted);
