"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState( itemsData.map( (item) => ({...item}) ) );

    const handleAddItem = (newItem) => {
        setItems( [...items, newItem] );
    } 

    return (
        <main className="text-lg font-bold">
            <h1 className="text-3xl p-2 text-green-500">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}