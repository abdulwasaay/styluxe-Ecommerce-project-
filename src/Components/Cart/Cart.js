import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cartcomp from "@/Components/cartcomp/Cartcomp";
import cart from "@/Context api/Productcontext"
import { useContext, useState } from "react"
import styles from "./Cart.module.css";
import Link from 'next/link';

export default function Cartmain() {
    const [totalprice, setTotalprice] = useState(0);
    const { state } = useContext(cart);
    
    const priceaddHandler = (price) => {
        setTotalprice(totalprice + price);
    }
    const pricesubtractHandler = (price) => {
        setTotalprice(totalprice - price)
    }
    const cancelHandler = (id)=>{
        state.map((elm,index)=>{
            if (elm.id === id){
                state.splice(index,1)
            }
        })
    }
    const orderHandler =()=>{
        if (state.length === 0){
            alert("No Items Available in Cart");
        }else{
            alert("Order placed successfully (NOTE: No online payments acceptable)");
            location.reload();
        }
    }
    const alldata = state.map((p) => {
        return <Cartcomp items={p} callbackadd={priceaddHandler} callbacksubtract={pricesubtractHandler} callbackcancel={cancelHandler}/>
    })
    return (
        <div className={styles.container}>
            <div className={styles.firstchild}>
                <FontDownloadIcon className={styles.icon} />
                <div className={styles.border}></div>
                <h1>shopping Cart</h1>
            </div>
            <div className={styles.secondchild}>
                {alldata}
            </div>
            <div className={styles.thirdchild}>
                <div className={styles.firstelem}>
                    <ArrowBackIcon className={styles.icon2} />
                    <p><Link href="/" className={styles.link}>Back to shop</Link></p>
                </div>
                <div className={styles.secondelem}>
                    <p>Subtotal:</p>
                    <p>${totalprice}</p>
                </div>
            </div>
            <div className={styles.button_cont}>
                <button className={styles.button} onClick={orderHandler}>Place Order</button>
            </div>
        </div>
    )
}