

export default function Item({foodObjs, onSelect}) {

    const { name, quantity, category} = foodObjs;

    return (
        <ul onClick={ () => onSelect(foodObjs) } className="p-2 m-4  bg-gray-800/60 hover:bg-gray-50 rounded-lg max-w-md text-green-500">
            <li>{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}