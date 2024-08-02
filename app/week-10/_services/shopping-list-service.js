import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsReference = collection(db, "users", userId, "items");
  const getItemQuery = query(itemsReference);
  const querySnapshot = await getDocs(getItemQuery);
  const items = [];
  querySnapshot.forEach((doc) => {
    let thisItem = {
      id: doc.id,
      ...doc.data(),
    };
    items.push(thisItem);
  });
  return items;
}

export async function addItem(userId, item) {
  try {
    const itemsReference = collection(db, "users", userId, "items");
    const documentReference = await addDoc(itemsReference, item);
    return documentReference.id;
  } catch (error) {
    console.log(error);
  }
}

