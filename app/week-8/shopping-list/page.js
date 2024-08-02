"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Page() {

  const [items, setItems] = useState(itemsData.map((item) => ({ ...item })));
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const cleanItemName = (itemName) => {
    return itemName
      .replace(/,.*$/, "")
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
  };

  const handleItemSelect = (selectedItem) => {
    const cleanedName = cleanItemName(selectedItem.name);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex space-y-5 space-x-10 p-5 m-4 text-lg font-bold ">
    
        <div className="flex">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl p-1 text-green-400">Shopping List</h1>
              <Link href="/week-8"
                className="bg-green-400 hover:bg-green-500 mr-5 p-1 rounded-md"
              >
                Sign out
              </Link>
            </div>

            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex text-green-400">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      
    </main>
  );
}
