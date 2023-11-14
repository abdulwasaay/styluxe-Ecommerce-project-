import { writeData } from "@/services/Productmethods";

export default async function handler(req, res) {
  if (req.method!=="POST"){
    res.status(404).json({message : "Api not successfull"});
  }
  const {id,title,price,image} = req.body;
  try{
    await writeData(id,title,price,image);
    res.status(201).json({message : "Product added successfully"});
  }catch (error){
    res.status(400).json({error : error.message});
  }
  }
  