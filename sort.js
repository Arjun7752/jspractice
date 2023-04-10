let products = [
  {
    "product_name": "The Witchers",
    "type": "book",
    "manufactured": new Date('2019-05-13'),
    "price": 800
  },
  {
    "product_name": "Black Heels",
    "type": "Shoes",
    "manufactured": new Date('2021-07-06'),
    "price": 2500
  },
  {
    "product_name": "Skybags",
    "type": "Bags",
    "manufactured": new Date('2020-09-22'),
    "price": 2200
  },
  {
    "product_name": "OnePlus 9",
    "type": "Mobile Phone",
    "manufactured": new Date('2021-03-23'),
    "price": 49000
  },
]

// Our sorting function
products.sort(
    (p1, p2) => 
    (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);

//output

> Array [
Object { product_name: "OnePlus 9", type: "Mobile Phone", manufactured: Tue Mar 23 2021 05:30:00 GMT+0530 (India Standard Time), price: 49000 }, 
Object { product_name: "Black Heels", type: "Shoes", manufactured: Tue Jul 06 2021 05:30:00 GMT+0530 (India Standard Time), price: 2500 }, 
Object { product_name: "Skybags", type: "Bags", manufactured: Tue Sep 22 2020 05:30:00 GMT+0530 (India Standard Time), price: 2200 }, 
Object { product_name: "The Witchers", type: "book", manufactured: Mon May 13 2019 05:30:00 GMT+0530 (India Standard Time), price: 800 }
]
let sortedDates = products.sort((p1, p2) => (p1.manufactured > p2.manufactured) ? 1 : (p1.manufactured < p2.manufactured) ? -1 : 0);
console.log("Products sorted based on ascending order of their manufacture dates are:")
console.log(sortedDates);

 "Products sorted based on ascending order of their manufacture dates are:"

Array [
Object { product_name: "The Witchers", type: "book", manufactured: Mon May 13 2019 05:30:00 GMT+0530 (India Standard Time), price: 800 },
Object { product_name: "Skybags", type: "Bags", manufactured: Tue Sep 22 2020 05:30:00 GMT+0530 (India Standard Time), price: 2200 }, 
Object { product_name: "OnePlus 9", type: "Mobile Phone", manufactured: Tue Mar 23 2021 05:30:00 GMT+0530 (India Standard Time), price: 49000 }, 
Object { product_name: "Black Heels", type: "Shoes", manufactured: Tue Jul 06 2021 05:30:00 GMT+0530 (India Standard Time), price: 2500 }]

//////////////////////////////////////////////////////////////////////////////////////////


var arrObj = [
    {name: "Ravi", id:1254, age: 25},
    {name: "Harini", id:1244, age: 15},
    {name: "Arjun", id:1234, age: 35},
    {name: "Asha", id:1224, age: 27}
];
undefined
const dup1 = arrObj.sort( (a, b) => a.name.localeCompare(b.name, "fr", {ignorePunctuation: true}))
undefined
dup1;
[{"name":"Arjun","id":1234,"age":35},{"name":"Asha","id":1224,"age":27},{"name":"Harini","id":1244,"age":15},{"name":"Ravi","id":1254,"age":25}]'
