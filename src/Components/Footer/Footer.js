import Link from "next/link";
import styles from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResFooter from "./ResponsiveFooter";
import { helpFAQsfunc, myStatusfunc, waystoShopfunc } from "./values";
import { useSession } from "next-auth/react";
import Loading from "@/pages/Loading/Loading";

export default function Footer() {
    const myStatus = myStatusfunc();
    const helpFAQs = helpFAQsfunc();
    const waystoShop = waystoShopfunc();
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.menuContainer}>
                    <ResFooter value={myStatus} button="My Status" />
                    <ResFooter value={helpFAQs} button="Help & FAQs" />
                    <ResFooter value={waystoShop} button="Ways to Shop" />
                </div>
                <div className={styles.flex1}>
                    <div >
                        <ul>
                            <li className={styles.heading} style={{ color: "white" }}>My Status</li>
                            <li>My Account</li>
                            <li>Order Status</li>
                            <li>Beauty Insider</li>
                            <li>Rewards Bazaar</li>
                            <li>Loves</li>
                            <li>- Subscribe Now</li>
                            <li>Flash Unlimited Shipping</li>
                            <li>Download the App</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles.heading} style={{ color: "white" }}>Help & FAQs</li>
                            <li>Online Ordering</li>
                            <li>Shipping</li>
                            <li>Billing</li>
                            <li>Returns & Exchanges</li>
                            <li>International Shipments</li>
                            <li>Customer Service</li>
                            <li>Contact Us</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles.heading} style={{ color: "white" }}>Ways To Shop</li>
                            <li>Just Arrived</li>
                            <li>Bestsellers</li>
                            <li>Gift Cards</li>
                            <li>Store Locations</li>
                            <li>Book a Reservation</li>
                            <li>Styluxe inside JCPenney</li>
                            <li>Styluxe + Google Home</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={styles.flex2}>
                    <Link href="https://www.facebook.com/wasay.khan.58511?mibextid=ZbWKwL"><FacebookIcon className={styles.icon} /></Link>
                    <Link href="https://www.instagram.com/wasay_1234"><InstagramIcon className={styles.icon} /></Link>
                    <Link href="https://github.com/abdulwasaay"><GitHubIcon className={styles.icon} /></Link>
                    <Link href="https://www.linkedin.com/in/abdul-wasay-68b125269"><LinkedInIcon className={styles.icon} /></Link>
                </div>
                <div>
                    <p>Copyright @ 2023 Styluxe USA, Inc. All rights reserved. Terms of Use | Privacy Policy</p>
                </div>
            </div>
        )
    }
    if (status === "unauthenticated") {
        return;
    }
}