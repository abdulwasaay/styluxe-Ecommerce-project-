import { useSession } from "next-auth/react"
import styles from "./Home.module.css"

export default function HomeComp({ text , data }){
    const sesion = useSession();
    if (sesion.status === "authenticated" && data.length !== 0){
        return(
            <>
            <h1>All Blogs</h1>
            <div className={styles.container}>
                {text}
            </div>
            </>
        )
    }
}