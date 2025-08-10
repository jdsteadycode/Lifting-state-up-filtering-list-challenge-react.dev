import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  // initial state array for search query
  const [query, setQuery] = useState("");

  // a new updated list of food items
  const filteredFoods = filterItems(foods, query);

  // check log**
  console.log(filteredFoods);

  // return jsx
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <hr />
      <List items={filteredFoods} />
    </>
  );
}

// () -> SearchBar Component
function SearchBar({ setQuery }) {
  // () -> handles input change
  function handleChange(e) {
    // update the state of parent class function
    setQuery((prev) => (prev = e.target.value.trim()));
  }

  // return jsx
  return (
    <label>
      Search: <input onChange={handleChange} />
    </label>
  );
}

// () -> List Component
function List({ items }) {
  // return jsx
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
