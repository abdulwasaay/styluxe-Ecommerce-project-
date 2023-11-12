import Signupcomp from "@/Components/Formcomp/Signupcomp";
import { getSession } from "next-auth/react";

export default function Signup() {
    const onSubmit = async (name, email, password) => {
        try {
            const response = await fetch("/api/auth/Formapi", {
                method: "POST",
                body: JSON.stringify({
                    name, email, password,
                    image: "/notfound.png",
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json()
            if (!response.ok) {
                if (data.error === "User already exists."){
                    alert(data.error)
                }else{
                    alert("Something went wrong, Please try again Later!")
                }
            }
            else {
                alert(data.messageSuces);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Signupcomp onformsubmit={onSubmit} />
        </>

    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })
    if (session) {
        if (session.user.email === "admin421@gmail.com"){
            return {
                redirect: {
                    destination: "/Dashboard/Dashboard",
                    permanent: false,
                }
    
            }
        }
        return {
            redirect: {
                destination: "/",
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
