 function uniqueChar(str) {
   const arr = str.split('');
   let obj = {}, result="", dup =[];
   for(let i=0; i < arr.length; i++){
    if(obj[arr[i]]){
     dup.push(arr[i])
    }else{
     obj[arr[i]] = 1
    }
 }
  result = Object.keys(obj).join("");
  return result, dup
 }
 
 console.log(uniqueChar('arjuna')) // arjun, ['a']
 
 function test(str){
 
  let obj={}, arr=str.split(''), result = "";
  for(let i of arr){
   obj[i] = obj[i] ? obj[i]+1 : 1
  }
  
  result += Object.keys(obj).map((item)=> `${item}${obj[item]}`).join("");
  return result;
 }
 
 console.log(test('arjuna')) // a2r1j1u1n1.
