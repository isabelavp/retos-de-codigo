function filterOddElements(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.push(arr[i]);
}
}
return result;
}
//filterOddElements([1, 2, 3, 4, 5])


module.exports = filterOddElements;