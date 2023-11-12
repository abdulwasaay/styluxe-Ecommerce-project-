import { app } from "@/pages/api/firebase";
import { compare, hash } from "bcryptjs";
import { getDatabase, ref, set, onValue ,push} from "firebase/database";

const db = getDatabase(app);

export function getAll() {
    const allData = ref(db, 'users/');
    return allData
}

export function getByEmail(email) {
    const data = getAll();
    const arr = [];
    onValue(data, (u) => {
        for (let key in u.val()) {
            if (u.val().hasOwnProperty(key)) {
                arr.push(u.val()[key])
            }
        }
    });
    return arr.find((u)=> u.email.toLowerCase()===email.toLowerCase())
    arr.splice(0)
}

export async function getAdmin() {
    const data = await getAll();
    return data.find(u => u.email.toLowerCase() === "admin421@gmail.com")
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
    set(newDocumentRef,{
        name, email,
        password: hashedPassword, image,
    });
}

export function EditPic(email, imageUrl) {
    const data = getAll();
    for (let item = 0; item < data.length; item++) {
        if (data[item].email.toLowerCase() === email.toLowerCase()) {
            data[item].image = imageUrl;
        }
        fs.writeFileSync(filepath, JSON.stringify(data));
    }
}