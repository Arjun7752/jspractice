let str = "madam";
let isPalindrome = str.split("").every( (value, i) => value === str[str.length-1 - i] );
console.log(isPalindrome(str)) // true.

function valid(str) {
if(str.length === 0) false;
let len = str.length, mid = Math.floor(len/2);
  for(let i=0; i < len; i++){
    if(str[i] !== str[len-1-i]){
      return false;
    }
  }
return true;
}
