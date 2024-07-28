"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page() {

    const [items, setItems] = useState( itemsData.map( (item) => ({...item}) ) );
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems( [...items, newItem] );
    } 

    const cleanItemName = (itemName) => {
        return itemName.replace(/,.*$/, '') 
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }

    const handleItemSelect = (selectedItem) => {
        const cleanedName = cleanItemName(selectedItem.name);
        setSelectedItemName(cleanedName);
    }

    return (
        <main className="flex space-y-5 space-x-10 p-5 m-4 text-lg font-bold ">
            <div>
                <h1 className="text-3xl p-2 text-green-500">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="flex text-green-500" >
                <MealIdeas ingredient={selectedItemName} />
            </div>            
        </main>
    );
}