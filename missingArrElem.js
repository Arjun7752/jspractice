function missingArrayElements(arr) {
  let missingArr = arr.sort( (a, b) => a > b ? 1 : -1);
  let result = [];
  for(let i = Math.min(...missingArr); i < Math.max(...missingArr); i++){
    if(missingArr.indexOf(i) < 0) result.push(i);
  }
  return result;
}
