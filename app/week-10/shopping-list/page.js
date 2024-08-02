"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const cleanItemName = (itemName) => {
    return itemName
      .replace(/,.*$/, "")
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleItemSelect = (selectedItem) => {
    const cleanedName = cleanItemName(selectedItem.name);
    setSelectedItemName(cleanedName);
  };

  async function loadItems() {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems || []);
    }
  }

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      if (newItemId) {
        setItems([...items, { id: newItemId, ...item }]);
      }
    }
  };



  return (
    <main className="flex space-y-5 space-x-10 p-5 m-4 text-lg font-bold ">
      <div className="flex">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl p-1 text-green-400">Shopping List</h1>
            <Link
              href="/week-10"
              className="bg-green-400 hover:bg-green-500 mr-5 p-1 rounded-md"
            >
              Sign out
            </Link>
          </div>

          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="flex text-green-400">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
