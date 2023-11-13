import Link from "next/link";
import { useRef } from "react";
import styles from "./SignupLogincomp.module.css"

export default function Logincomp({onLoginsubmit}) {
    const emailref = useRef();
    const passwordref = useRef();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const email = emailref.current.value;
        const password = passwordref.current.value;
        onLoginsubmit(email,password);
    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <hr />
            <div>
                <form onSubmit={onSubmitHandler}>
                    <input type="email" placeholder="Enter your email" required ref={emailref}/><br />
                    <input type="password" placeholder="Enter your Password" required ref={passwordref}/><br />
                    <button type="Submit" className={styles.button}>Login</button>
                </form>
                <h4>Create a new account?<Link href="../Forms/Signup" className={styles.link}>Signup</Link></h4>
            </div>
        </div>
    )
}