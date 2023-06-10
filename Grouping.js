let employees = [
  { name: "Abigail", age: "25" },
  { name: "Axle", age: "29" },
  { name: "Brianna", age: "25" },
  { name: "Brooklyn", age: "23" },
  { name: "Camila", age: "24" },
  { name: "Charlotte", age: "28" },
  { name: "David", age: "22" }
];

let data = employees.reduce((r, e) => {
  let alphabet = e.name[0];
 
  // if there is no property in accumulator with this letter create it
  if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }
 
  // if there is push current element to children array for that letter
  else r[alphabet].record.push(e);
 
  // return accumulator
  return r;
}, {});
 
let result = Object.values(data);
console.log(result);
