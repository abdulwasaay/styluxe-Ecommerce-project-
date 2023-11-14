import { app } from "@/firebase";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const db = getDatabase(app);


export function getAlldata() {
    const data = ref(db, 'products/');
    return data;
}

export function getById(id) {
    return new Promise((resolve, reject) => {
        const products = getAlldata();
        const arr = [];
        onValue(products, (u) => {
            for (let key in u.val()) {
                if (u.val().hasOwnProperty(key)) {
                    arr.push(u.val()[key])
                }
            }
            return resolve(arr.find((u) => u.id === id))
        }, (error) => {
            reject(error);
        });
    });
}

export async function writeData(id, title, price, image) {
    const found = await getById(id)
    if (found) {
        throw new Error("This Product Already Exists")
    }
    const db = getDatabase(app);
    const newDocumentRef = push(ref(db, "products"));
    set(newDocumentRef, {
        id, title, price, image
    });
}