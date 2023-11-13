import { app } from "@/firebase";
import { getDatabase, ref, set, onValue ,push} from "firebase/database";

const db = getDatabase(app);


export function getAlldata() {
    const data = ref(db, 'products/');
    return data;
}

export function getById(id) {
    const products = getAlldata();
    const arr = [];
    onValue(products, (u) => {
        for (let key in u.val()) {
            if (u.val().hasOwnProperty(key)) {
                arr.push(u.val()[key])
            }
        }
    });
    return arr.find((u)=> u.id===id)
    arr.splice(0)
}

export function writeData(id,title,price,image) {
    const found = getById(id)
    if (found){
        throw new Error("This Product Already Exists")
    }
    const db = getDatabase(app);
    const newDocumentRef = push(ref(db, "products"));
    set(newDocumentRef,{
        id,title,price,image
    });
}