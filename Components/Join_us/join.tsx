import styles from "../Join_us/join.module.css";
import Link from "next/link";

export default function Join() {
    return (
        <div className={styles.container}>
            <h1 data-aos="fade-down"  data-aos-duration="2000" className={styles.header}>JOIN US</h1>
            <div className={styles.box}>
                <div  data-aos="zoom-in"  data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/it.jpeg"
                        alt="The it picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>IT PRODUCT</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>It All Begins With An Idea. Maybe You Want To Launch A Business. Maybe You Want To Turn A Hobby Into Something More.</p>
                    <Link className={styles.link} passHref href="/IT_Page/IT"><button className={styles.btn}>Click here</button></Link>
                </div>
                <div data-aos="zoom-in"  data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/education.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>EDUCATION</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>It All Begins With An Idea. Maybe You Want To Launch A Business. Maybe You Want To Turn A Hobby Into Something More.</p>
                    <Link className={styles.link} passHref href="/Education_Page/Education"><button className={styles.btn}>Click here</button></Link>
                </div>
                <div data-aos="zoom-in"  data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/marketing.jpeg"
                        alt="The marketing picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>MARKETING</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>It All Begins With An Idea. Maybe You Want To Launch A Business. Maybe You Want To Turn A Hobby Into Something More.</p>
                    <Link className={styles.link} passHref href="/Marketing_Page/Marketing"><button className={styles.btn}>Click here</button></Link>
                </div>
            </div>
        </div>
    )
}