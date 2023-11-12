import Logincomp from "@/Components/Formcomp/Logincomp";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login(props) {
    const session = useSession();
    const router = useRouter();
    const onSubmit = async(email, password) => {
        const data = await signIn("credentials", {
            email, password,
            redirect: false,
        })
        if (!data.ok){
            if (data.error === "User doesnot found !" || data.error === "Incorect password !"){
                alert(data.error)
            }else{
                alert("Something went wrong, Please try again Later!")
            }
        }else{
            alert("Login Successfull")
        }
    }
    useEffect(() => {
        if (session.status !== "loading") {
            // Redirect to a different page based on the authentication state
            if (session.status === "authenticated") {
                console.log(session)
                if (session.data.user.email.toLowerCase() === "admin421@gmail.com") {
                    router.push('/Dashboard/Dashboard');
                } else {
                    router.push('/');
                }// Redirect if authenticated
            } else {
                router.push('/Forms/Login'); // Redirect to the sign-in page if not authenticated
            }
        }
    }, [session]);
    if (session.status === "unauthenticated") {
        return (
            <Logincomp onLoginsubmit={onSubmit} />
        )
    }
    if (session.status === "authenticated") {
        return;
    }
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })
    if (session) {
        if (session.user.email === "admin421@gmail.com") {
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
    return {
        props: {
            session
        }
    }

}