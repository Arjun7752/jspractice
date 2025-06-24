function add(a) {
  return function inner(b) {
    
    if(b === undefined){
      return a;
    } else {
      return add(a+b)
    }
    
  }
}
