import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="text-lg font-bold">
            <h1 className="text-3xl text-sky-500">Shopping List</h1>
            <ItemList />
        </main>
    );
}