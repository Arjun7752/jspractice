//missing array elements
function missingArrElement(arr) {
  let miss= arr.sort( (a,b) => a > b ? 1 : -1 );
  let result = [];
  for(let i = Math.min(...miss); i < Math.max(...miss); i++) {
    if(miss.indexOf(i) < 0) {
      resutl.push(i)
    }
  }
  return result;
}
