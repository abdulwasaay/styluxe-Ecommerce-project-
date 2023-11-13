import DashboardComp from "@/Components/Dashboard/DashboardComp";
import Product from "@/Components/products/Product";
import { getSession } from "next-auth/react";
import styles from "./Dashboard.module.css"
import { onValue } from "firebase/database";
import { getAlldata } from "@/services/Productmethods";

export default function Dashboard({arr}) {
    const allData = arr.map(p => {
        return <Product obj={p}/>
    })
    return (
        <>
        <DashboardComp />
        <h1 className={styles.heading}>My products</h1>
        <div className={styles.container}>
        {allData}
        </div>
        </>
    )
}

export async function getServerSideProps({req}){
    const arr=[]
    const data = getAlldata();
    onValue(data, (u) => {
        for (let key in u.val()) {
            if (u.val().hasOwnProperty(key)) {
                arr.unshift(u.val()[key])
            }
        }
    });
    const session = await getSession({req});
    if(!session){
        return {
            redirect: {
                destination: "/Forms/Login",
                permanent: false,
            }

        }
    }
    if (session.user.email.toLowerCase()!=="admin421@gmail.com"){
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }

        }
    }
    return{
        props:{
            arr
        }
    }
}
