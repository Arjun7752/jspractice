function denomination(amount, t){

let notes= [2000,1000,500,200,100,50,20,10];
let notesCount = Array(notes.length).fill(0);
let  tt= amount -t
for(let i= 0; i < notes.length;i++){
 if(tt >= i){
 notesCount[i] = Math.floor(tt / notes[i]);
 tt = tt % notes[i];
 
 }
}

let obj = {};

for(let i=0; i <  notes.length; i++){
if(notesCount[i] !== 0){
 obj[notes[i]] = notesCount[i];
}
}
return obj;
}

console.log(denomination(1080, 20))
