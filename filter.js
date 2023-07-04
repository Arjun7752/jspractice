import "./styles.css";
import { useState } from "react";

const fruits = [
  "apple",
  "orange",
  "banana",
  "pear",
  "grapefruit",
  "peach",
  "apricot",
  "nectarine",
  "plum",
  "mango",
  "strawberry",
  "blueberry",
  "kiwi",
  "passionfruit",
  "raspberry",
  "watermelon"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  let listToDisplay = fruits;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderFruitList = () => {
    return listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>);
  };

  if (searchTerm !== "") {
    listToDisplay = fruits.filter((fruit) => {
      return fruit.includes(searchTerm);
    });
  }

  return (
    <div className="App">
      <h1>Fruit Stand</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {renderFruitList()}
    </div>
  );
}
