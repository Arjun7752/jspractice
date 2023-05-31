var str = "arjun palika is a very good and nice person";

function test(s) {
 var arr = s.split(" ");
 var str = "";
 for(let i of arr){
  str += i.charAt(0).toUpperCase() + i.slice(1)+ " ";
 }
 return str;
}

console.log(test(str))

// "Arjun Palika Is A Very Good And Nice Person"
