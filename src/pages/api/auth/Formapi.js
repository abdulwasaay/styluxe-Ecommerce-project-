import { addData } from "@/services/Formmethods";

export default async function handler(req, res) {
    if (req.method !== "POST"){
        res.status(404).json({messageApi : "Api not successfull"});
    }
    const { name,email,password,image }=req.body;
    try {
        await addData(name,email,password,image);
        res.status(201).json({messageSuces : "signup successfull"});
    } catch (error) {
        res.status(400).json({error : error.message})
    }
  }
  