import FireTruckIcon from '@mui/icons-material/FireTruck';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import styles from "./Shipping.module.css"

export default function Shipping() {
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <FireTruckIcon className={styles.icon}/>
                <div>
                    <h4>FREE SHIPPING</h4>
                    <p>Free shipping on all US</p>
                    <p>order or order above $200</p>
                </div>
            </div>
            <div className={styles.contain}>
                <AssignmentReturnIcon className={styles.icon}/>
                <div>
                    <h4>30 DAYS RETURN</h4>
                    <p>Simply return it within</p>
                    <p>30 days for an exchange</p>
                </div>
            </div>
            <div className={styles.contain}>
                <PriceCheckIcon className={styles.icon}/>
                <div>
                    <h4>100% PAYMENT SECURE</h4>
                    <p>Simply return it within</p>
                    <p>30 days for an exchange</p>
                </div>
            </div>
        </div>
    )
}