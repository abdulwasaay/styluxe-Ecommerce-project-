import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import styles from "./Cartcomp.module.css";

export default function Cartcomp({ items, callbackadd, callbacksubtract ,  callbackcancel }) {
    const [count, setCount] = useState(0);
    const [cancel,setCancel] = useState(false);
    const addHandler = () => {
        setCount(count + 1)
        callbackadd(parseInt(items.price))
    }
    const subtractHandler = () => {
        if (count >=1){
            setCount(count - 1)
            callbacksubtract(parseInt(items.price))
        }else{
            setCount(0)
        }
    }
    const cancelHandler = ()=>{
        setCancel(true);
        callbackcancel(items.id);
    }
    return (
        <div className={`${ styles.container} ${cancel? styles.remove : ""}`}>
            <div className={styles.contain}>
                <div>
                    <img src={items.image} alt="Product-image" />
                </div>
                <div className={styles.flex}>
                    <h4>{items.title}</h4>
                    <p className={styles.id}>Ref : {items.id}</p>
                </div>
                <div>
                    <p className={styles.p}>{count}</p>
                </div>
                <div>
                    <div>
                        <button onClick={addHandler}> <AddCircleIcon /></button><br />
                        <button onClick={subtractHandler}> <RemoveCircleIcon /></button>
                    </div>
                </div>
                <div >
                    <p className={styles.price}>${items.price}</p>
                </div>
                <div className={styles.cancel}>
                    <button onClick={cancelHandler}>X</button>
                </div>
            </div>
        </div>
    )
}