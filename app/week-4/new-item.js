"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(
      `Item: ${item.name} \nQuantity: ${item.quantity} \nCategory: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleSetName = (event) => setName(event.target.value);
  const handleSetQuantity = (event) => setQuantity(event.target.value);
  const handleSetCategory = (event) => setCategory(event.target.value);

  return (
    <form className="flex flex-col space-y-5 p-5 m-4 bg-gray-800/60 rounded-lg max-w-md text-black">
      <div className="">
        <input className="rounded-lg w-full p-2 border-2 border-green-500/75"
          type="text"
          placeholder="Product name"
          value={name}
          onChange={handleSetName}
          required
        />
      </div>
      <div className="flex justify-between" >
        <input className="rounded-lg p-2 border-2 border-green-500/75"
          min={1}
          max={99}
          value={quantity}
          onChange={handleSetQuantity}
          required
        />

        <select value={category} onChange={handleSetCategory} className="rounded-lg p-2 border-2 border-green-500/75">
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
      <button onClick={handleSubmit} className="bg-green-500 rounded-lg p-1 w-full" >Add to list</button>
    </form>
  );
}
