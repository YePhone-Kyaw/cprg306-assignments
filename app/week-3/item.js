

export default function Item({foodObjs}) {

    const {name, quantity, category} = foodObjs;

    return (
        <ul className="p-2 m-4 bg-gray-800/60 rounded-lg max-w-md text-green-500">
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </ul>
    );
}