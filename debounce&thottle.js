var input = document.getElementById("input");

input.addEventListener("input", function(e){
getResult()
});


var getResult = debounce(()=>{
console.log("ok");
},1000);

function debounce(fn,delay){
var timer;

return (...args) => {
clearTimeout(timer);
timer = setTimeout(()=>{
 fn.apply(this, ...args)
}, delay)
}

}


/////////////////////////////////////////////////////////////////
<input type="text" id="input" onkeyup="wrapper()" />

let flag = true;
function wrapper(){

const input = document.getElementById("input").value;

if(flag){
throttle(input);
flag = false;
setTimeout(()=>{
flag = true
}, 2000)
}


}

function throttle(inputData){
 console.log(inputData)
}

function debounce(fn, delay){
  let timer;
  return (...args) => {
  clearTimeout(timer);
  timer = setTimeout( () => {
   fn.apply(...args);
  }, delay);
  
  }
}
