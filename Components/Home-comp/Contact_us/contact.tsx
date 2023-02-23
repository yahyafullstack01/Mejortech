import styles from "../Contact_us/contact.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function Contact() {

    const { t, CONTACT_labels, isArabic } = useContext(AppContext)

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
            <div data-aos="zoom-in" data-aos-duration="2000" className={`${styles.box} ${"text-white  w-full"}`}>
                <h1 className={`${styles.header} ${"text-center"}`}>{t("CONTACT_title")}</h1>
                <p className={`${styles.quote}`}>
                    {t("CONTACT_quote")}
                </p>
                <form action="https://hooks.airtable.com/workflows/v1/genericWebhook/appIbqQDdN5r8Ubiz/wflN4MKI7kBl3ULGj/wtrEbvMzNzmGeWXle" method="POST" className={`${styles.form} ${"text-white"}`}>
                    <div className="flex flex-col">
                        <label htmlFor={"Email"} className={`${styles.label} ${isArabic ? styles.ar : ""}`}>{CONTACT_labels[0]}</label>
                        <input className={styles.input} id="Email" name="Email" type={"email"} required placeholder="" />
                    </div>
                    <div className="flex flex-col mt-10">
                        <label htmlFor={"TextArea"} className={`${styles.label} ${isArabic ? styles.ar : ""}`}>{CONTACT_labels[1]}</label>
                        <textarea className={styles.textarea} id="TextArea" name="textarea" required placeholder="" />
                    </div>

                    <button className={`${styles.btn} ${isArabic ? styles.ar : ""}`} type={"submit"}>{t("CONTACT_btn")}</button>
                </form>
            </div>
        </div>
    )
}