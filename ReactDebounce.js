import React, { useState } from "react";

const getProducts = (q) => {
  const products = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Watermelon",
    "Avocado",
    "Blueberry",
    "Cantaloupe",
    "Dragonfruit",
    "Eggplant",
    "Feijoa",
    "Guava",
    "Huckleberry",
    "Indian Gooseberry",
    "Jujube",
    "Key Lime",
    "Lime",
    "Mandarin",
    "Nectarine",
    "Olive",
    "Pineapple",
    "Quince",
    "Rambutan",
    "Starfruit"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        products.filter((item) => item.toLowerCase().includes(q.toLowerCase()))
      );
    }, Math.random() * 1000);
  });
};

function App() {
  const [data, setData] = useState();

  const debounce = (func) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, 1000);
    };
  };
  const getFilterData = async (input) => {
    let response = await getProducts(input);
    setData(response);
  };
  const handleChange = (val) => {
    //console.log(val);
    getFilterData(val);
  };

  const optimizedFunc = debounce(handleChange);
  return (
    <>
      <input type="text" onChange={(e) => optimizedFunc(e.target.value)} />
      {data && data.map((item, i) => <li key={i}>{item} </li>)}
    </>
  );
}

export default App;
