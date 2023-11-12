import { useSession } from "next-auth/react"
import styles from "./Responsive.module.css"
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import Loading from "@/pages/Loading/Loading";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { signOut } from 'next-auth/react';

export default function ResHeader({ menuappear, menuclose }) {
    const { data: session, status } = useSession();
    const menuCloseHandler = () => {
        menuclose(false)
    }
    if (status === "authenticated") {
        if (session?.user.email.toLowerCase() !== "admin421@gmail.com") {
            return (
                <div className={`${styles.container} ${menuappear ? styles.openss : styles.close}`}>
                    <div className={styles.cancel}>
                        <button onClick={menuCloseHandler} className={styles.cross}>X</button>
                    </div>
                    <hr />
                    <nav>
                        <div>
                            <Link href="/" className={styles.links}>Home</Link><br />
                            <button className={styles.butn} onClick={() => signOut({ callbackUrl: "/Forms/Login" })}>Logout</button><br />
                            <Link href="/Cart/Cart" className={styles.links}><AddShoppingCartIcon className={styles.icons}/></Link><br />
                            <Link href="#" className={styles.user}>
                                <UserOutlined />
                            </Link>
                        </div>
                    </nav>
                </div>
            )
        }
        return (
            <div className={`${styles.container} ${menuappear ? styles.openss : styles.close}`}>
                <div className={styles.cancel}>
                    <button onClick={menuCloseHandler} className={styles.cross}>X</button>
                </div>
                <hr />
                <nav style={{ marginTop: "30px" }}>
                    <div>
                        <button className={styles.butn} onClick={() => signOut({ callbackUrl: "/Forms/Login" })}>Logout</button><br />
                        <Link href="/Dashboard/Dashboard" className={styles.links}>Dashboard</Link><br />
                        <Link href="#" className={styles.user}>
                            <UserOutlined />
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
    if (status === "unauthenticated") {
        return;
    }
    return <Loading />
}
