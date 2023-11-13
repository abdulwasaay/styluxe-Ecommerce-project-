import { app } from "@/firebase";
import { compare, hash } from "bcryptjs";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const db = getDatabase(app);

export function getAll() {
    const allData = ref(db, 'users/');
    return allData
}

export function getByEmail(email) {
    const arr = [];
    const data = getAll();
    onValue(data, (u) => {
        for (let key in u.val()) {
            arr.push(u.val()[key])

        }
    });
    return arr.find((u)=> u.email.toLowerCase()===email.toLowerCase());
}

export async function getByPassword(password, hashpassword) {
    const confirmPassword = await compare(password, hashpassword)
    return confirmPassword
}

export async function addData(name, email, password, image) {
    let found = getByEmail(email)
    if (found) {
        throw new Error("User already exists.");
    }
    const db = getDatabase(app);
    const newDocumentRef = push(ref(db, "users"));
    const hashedPassword = await hash(password, 12);
    set(newDocumentRef, {
        name, email,
        password: hashedPassword, image,
    });
}
app