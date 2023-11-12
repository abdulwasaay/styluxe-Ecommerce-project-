import Link from 'next/link';
import styles from "./Header.module.css"
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Loading from '@/pages/Loading/Loading';
import { MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchBar from '../SearchInput/Search';
import { useState } from 'react';
import ResHeader from './Responsive';

export default function Header() {
    const { data: session, status } = useSession();
    const [ismenu, setIsmenu] = useState(false);
    const [issearch, setSearch] = useState(false);
    const menuhandler = () => {
        setIsmenu(true);
    }
    const closeHandler = (nottrue) => {
        setIsmenu(nottrue)
    }

    const ResponsiveSearchHandler = () => {
        setSearch(!issearch);
    }
    if (status === "authenticated") {
        if (session?.user.email.toLowerCase() !== "admin421@gmail.com") {
            return (
                <div className={styles.container}>
                    <nav>
                        <h1 className={styles.heading}>Styluxe</h1>
                        <div className={styles.searchBar}>
                            <SearchBar />
                        </div>
                        <div>
                            <button className={styles.search} onClick={ResponsiveSearchHandler}><SearchOutlined /></button>
                            <Link href="/" className={styles.links}>Home</Link>
                            <button className={styles.butn} onClick={() => signOut({ callbackUrl: "/Forms/Login" })}>Logout</button>
                            <Link href="/Cart/Cart" className={styles.links}><AddShoppingCartIcon className={styles.cart}/></Link>
                            <Link href="#" className={styles.user}>
                                <UserOutlined />
                            </Link>
                            <button className={styles.menu} onClick={menuhandler}><MenuOutlined /></button>
                        </div>
                    </nav>
                    <div >
                        <ResHeader menuappear={ismenu} menuclose={closeHandler} />
                    </div>
                    <div className={`${styles.searchContainer} ${issearch ? styles.openSearch : styles.closeSearch}`}>
                        <SearchBar />
                    </div>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                <nav >
                    <h1 className={styles.heading}>Admin</h1>
                    <div>
                        <button className={styles.butn} onClick={() => signOut({ callbackUrl: "/Forms/Login" })}>Logout</button>
                        <Link href="/Dashboard/Dashboard" className={styles.links}>Dashboard</Link>
                        <Link href="#" className={styles.user}>
                            <UserOutlined />
                        </Link>
                        <button className={styles.menu} onClick={menuhandler} style={{ lineHeight: "30px" }}><MenuOutlined /></button>
                    </div>
                </nav>
                <div>
                    <ResHeader menuappear={ismenu} menuclose={closeHandler} />
                </div>
            </div>
        )
    }
    if (status === "unauthenticated") {
        return;
    }
    return (
        <Loading />
    )
}
