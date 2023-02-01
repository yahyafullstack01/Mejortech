import styles from "../Contact_us/contact.module.css";

export default function Contact() {
    return (
        <div id="Contact_us" className={`${styles.container} ${"flex flex-col relative"}`}>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/contact.mp4" type="video/mp4" />
            </video>
            <div  data-aos="zoom-in"  data-aos-duration="2000" className={`${styles.box} ${"text-white  w-full"}`}>
                <h1 className={`${styles.header} ${"text-center"}`}>CONTACT US</h1>
                <p className={`${styles.quote}`}>
                    It All Begins With An Idea. Maybe You Want To Launch A Business.
                    Maybe You Want To Turn A Hobby Into Something More. Or Maybe You Have A Creative Project To Share With The World.
                    Whatever It Is, The Way You Tell Your Story Online Can Make All The Difference.
                </p>
                <form action={process.env.MyDataHomePage} method="POST" className={`${styles.form} ${"text-white"}`}>
                    <div className="flex flex-col">
                        <label htmlFor={"Email"} className={styles.label}>Email</label>
                        <input className={styles.input} id="Email" name="Email" type={"email"} required placeholder="" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor={"TextArea"} className={styles.label}>Message</label>
                        <textarea className={styles.textarea} id="TextArea" name="textarea" required placeholder="" />
                    </div>

                    <button className={styles.btn} type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    )
}