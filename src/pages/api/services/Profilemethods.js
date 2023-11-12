import path from "path";
import { getAll } from "./Formmethods";

const filepath=path.join(process.cwd(),"src","Database","formdata.json");

export function getbyName(name){
    const profileData = getAll()
    return profileData.find(u => u.name.replace(/\s+/g, "")===name.replace(/\s+/g, ""))
}