"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList( {items} ) {

    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort( (a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } 
    } );

    // items(item);

    const groupedItems = [...items].reduce( (acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} );

    const sortedGroupedItems = Object.keys(groupedItems).sort().reduce( (acc, category) => {
        acc[category] = groupedItems[category].sort( (a,b) => a.name.localeCompare(b.name) )
        return acc;
    }, {} );

    return (
        <div className="">
            <div className="flex justify-between m-4 p-5 bg-gray-800/60 rounded-lg max-w-lg">
            <p className="text-xl">Sort By:</p>
            <button onClick={ () => setSortBy('name') } className={`p-1 rounded-lg ${sortBy === 'name' ? 'bg-green-500/75' : 'bg-green-700/75'}`} >Name</button>
            <button onClick={ () => setSortBy('category') } className={`p-1 rounded-lg ${sortBy === 'category' ? 'bg-green-500/75' : 'bg-green-700/75'}`} >Category</button>
            <button onClick={ () => setSortBy('grouped') } className={`p-1 rounded-lg ${sortBy === 'grouped' ? 'bg-green-500/75' : 'bg-green-700/75'}`} >Grouped By Category</button>
            </div>

            <div className="flex flex-col m-4 p-5 bg-gray-800/60 rounded-lg max-w-lg">
                {sortBy === 'grouped' ? (
                    Object.keys(sortedGroupedItems).map(category => (
                        <div key={category} className="mb-4">
                            <h3 className="text-xl capitalize mb-2">{category}</h3>
                            {sortedGroupedItems[category].map(item => (
                                <Item key={item.id} foodObjs={item} />
                            ))}
                        </div>
                    ))
                ) : (
                    sortedItems.map(item => (
                        <Item key={item.id} foodObjs={item} />
                    ))
                )}
            </div>
        </div>
    );
}