import { useSession } from "next-auth/react";
import styles from "./Product.module.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useContext } from "react";
import cart from "@/Context api/Productcontext";

export default function Product({ obj }) {
    const { data : session} = useSession();
    const {setdataHandler} = useContext(cart);
    const cartHandler =(e)=>{
        e.preventDefault();
        setdataHandler(obj.id,obj.title,obj.price,obj.image);
        alert("Ïtem added to Cart Successfully");
    }
    return (
        <div className={styles.container}>
            <img src={obj.image} alt="product_image"/><br />
            <p>{obj.title}</p>
            {
                session?.user.email.toLocaleLowerCase()=== "admin421@gmail.com"?(
                    <p>${obj.price}</p>
                ):(
                    <div className={styles.flex}>
                        <p>${obj.price}</p>
                        <button onClick={cartHandler} ><AddCircleIcon /></button>
                    </div>
                )
            }
        </div>
    )
}