import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./SignupLogincomp.module.css"

export default function Signupcomp({ onformsubmit}) {
    const [emailstate, setemailstate] = useState("");
    const [passstate, setpassstate] = useState("");
    const fnameref = useRef();
    const lnameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>]{1,})(?=.*\d)(?=.*[A-Z])/;

    const onSignupHandler = (e) => {
        e.preventDefault();
        const name = fnameref.current.value + " " + lnameref.current.value;
        const email = emailref.current.value;
        const password = passwordref.current.value;
        if (emailRegex.test(email) === false) {
            emailref.current.style.borderBottom = "1px solid red"
            setemailstate(<h3 style={{
                fontSize: "15px",
                marginTop: "5px",
                color: "red",
                fontfamily: "sans-serif",
                fontweight: "bold"
            }}>email address must contains @. !</h3>)
        }
        if (password.length < 8) {
            passwordref.current.style.borderBottom = "1px solid red"
            setpassstate(<h3 style={{
                fontSize: "15px",
                marginTop: "5px",
                color: "red",
                fontfamily: "sans-serif",
                fontweight: "bold"
            }}>Password length must be 8 or above !</h3>)
        }
        else if (passwordRegex.test(password) === false) {
            passwordref.current.style.borderBottom = "1px solid red"
            setpassstate(<h3 style={{
                fontSize: "15px",
                marginTop: "5px",
                color: "red",
                fontfamily: "sans-serif",
                fontweight: "bold"
            }}>Password must contain one capital letter , <br />special characters <br /> and numbers !</h3>)
        }
        else {
            onformsubmit(name, email, password);
            emailref.current.style.borderBottom = "1px solid gray"
            passwordref.current.style.borderBottom = "1px solid gray"
            setemailstate("");
            setpassstate("");
        }
    }
    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <hr />
            <div>
                <form onSubmit={onSignupHandler}>
                    <input type="text" placeholder="First name" required ref={fnameref} /><br />
                    <input type="text" placeholder="Last name" required ref={lnameref} /><br />
                    <input type="email" placeholder="Enter your email" required ref={emailref} /><br />
                    {emailstate}
                    <input type="password" placeholder="Enter your Password" required ref={passwordref} />
                    {passstate}
                    <button type="Submit" className={styles.button}>Signup</button>
                </form>
                <h4>Already have an account?<Link href="../Forms/Login" className={styles.link}> Login</Link></h4>
            </div>
        </div>
    )
}