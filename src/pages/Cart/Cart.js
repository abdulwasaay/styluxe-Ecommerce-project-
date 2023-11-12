import Cartmain from "@/Components/Cart/Cart";
import { getSession } from "next-auth/react";

export default function Cart(){
   
    return(
        <div >
            <Cartmain />
        </div>
    )
}

export async function getServerSideProps({req}){
    const session = await getSession({req});
    if(!session){
        return{
            redirect:{
                destination:"/Forms/Login",
                permanent: false,
            }
        }
    }
    if (session.user.email.toLowerCase() === "admin421@gmail.com") {
        return {
          redirect: {
            destination: "/Dashboard/Dashboard",
            permanent: false,
          }
        }
      }
      return{
        props:{
            session
        }
      }
}