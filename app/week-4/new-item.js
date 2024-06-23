"use client";

import { sendStatusCode } from "next/dist/server/api-utils";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(
      `Item: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    serCategory("produce");
  };

  const handleSetName = (event) => setName(event.target.value);
  const handleSetQuantity = (event) => setQuantity(event.target.value);
  const handleSetCategory = (event) => setCategory(event.target.value);

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={handleSetName}
          required
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          min={1}
          max={99}
          value={quantity}
          onChange={handleSetQuantity}
          required
        />
      </div>

      <div>
        <label>Name</label>
        <select value={category} onChange={handleSetCategory}>
            <option value="produce">Produce</option>
            <option value="diary">Diary</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
