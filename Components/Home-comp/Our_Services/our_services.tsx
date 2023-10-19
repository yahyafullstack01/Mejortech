import styles from "../Our_Services/our_services.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function Team() {
    const {
        t, isArabic,
        Our_services_Types_title, Our_services_Types_about,
        Our_services_service, Our_services_type_website_Dev, Our_services_type_website_Dev_info,
        Our_services_type_Mobile_Dev, Our_services_type_Mobile_Dev_info, Our_services_type_Frontend_training,
        Our_services_type_Frontend_training_info, Our_services_type_Digital_marketing, Our_services_type_Digital_marketing_info
    } = useContext(AppContext);
    console.log(t("Our_services_type_Frontend_training"));
    return (
        <div
            id="Our_services"  className={`${styles.container} ${"flex flex-col relative"}`}>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/Our_services.mp4" type="video/mp4" />
            </video>
            <h1 className={`${styles.header} ${"text-center"}`}>{t("Our_services_title")}</h1>
            <div className={`${styles.Block} ${"text-white"}`}>
                <h2 className={styles.title}>{Our_services_Types_title[0]}</h2>
                <img
                    src={"/Website_develop.jpg"}
                    alt="The Website developing picture"
                    data-aos="fade-right" data-aos-duration="2000"
                    className={styles.img}
                />
                <h3 className={`${styles.about} ${isArabic ? styles.ar : ""}`}>{Our_services_Types_about[0]}</h3>
                <p className={`${styles.type} ${isArabic ? styles.ar : ""}`}>{Our_services_service[0]}</p>
                <ol className={styles.ol} data-aos="fade-in" data-aos-duration="2000">
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[0]}</strong> {Our_services_type_website_Dev_info[0]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[1]}</strong> {Our_services_type_website_Dev_info[1]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[2]}</strong> {Our_services_type_website_Dev_info[2]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[3]}</strong> {Our_services_type_website_Dev_info[3]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[4]}</strong> {Our_services_type_website_Dev_info[4]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[5]}</strong> {Our_services_type_website_Dev_info[5]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[6]}</strong> {Our_services_type_website_Dev_info[6]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_website_Dev[7]}</strong> {Our_services_type_website_Dev_info[7]}</li>
                </ol>
                <br />
                <br />
                <h2 className={styles.title}>{Our_services_Types_title[1]}</h2>
                <img
                    src={"/Mobile_apps.jpg"}
                    alt="The Mobile picture"
                    data-aos="fade-left" data-aos-duration="2000"
                    className={styles.img}
                />
                <h3 className={`${styles.about} ${isArabic ? styles.ar : ""}`}>{Our_services_Types_about[1]}</h3>
                <p className={`${styles.type} ${isArabic ? styles.ar : ""}`}>{Our_services_service[1]}</p>
                <ol className={styles.ol} data-aos="fade-in" data-aos-duration="2000">
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[0]}</strong> {Our_services_type_Mobile_Dev_info[0]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[1]}</strong> {Our_services_type_Mobile_Dev_info[1]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[2]}</strong> {Our_services_type_Mobile_Dev_info[2]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[3]}</strong> {Our_services_type_Mobile_Dev_info[3]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[4]}</strong> {Our_services_type_Mobile_Dev_info[4]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Mobile_Dev[5]}</strong> {Our_services_type_Mobile_Dev_info[5]}</li>
                </ol>
                <br />
                <br />
                <h2 className={styles.title}>{Our_services_Types_title[2]}</h2>
                <img
                    src={"/Frontend_training.jpg"}
                    alt="The Frontend training picture"
                    data-aos="fade-right" data-aos-duration="2000"
                    className={styles.img}
                />
                <h3 className={`${styles.about} ${isArabic ? styles.ar : ""}`}>{Our_services_Types_about[2]}</h3>
                <p className={`${styles.type} ${isArabic ? styles.ar : ""}`}>{Our_services_service[2]}</p>
                <ol className={styles.ol} data-aos="fade-in" data-aos-duration="2000">
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[0]}</strong> {Our_services_type_Frontend_training_info[0]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[1]}</strong> {Our_services_type_Frontend_training_info[1]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[2]}</strong> {Our_services_type_Frontend_training_info[2]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[3]}</strong> {Our_services_type_Frontend_training_info[3]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[4]}</strong> {Our_services_type_Frontend_training_info[4]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Frontend_training[5]}</strong> {Our_services_type_Frontend_training_info[5]}</li>
                </ol>
                <br />
                <br />
                <h2 className={styles.title}>{Our_services_Types_title[3]}</h2>
                <img
                    src={"/Digital_marketing.jpg"}
                    alt="The Frontend training picture"
                    data-aos="fade-left" data-aos-duration="2000"
                    className={styles.img}
                />
                <h3 className={`${styles.about} ${isArabic ? styles.ar : ""}`}>{Our_services_Types_about[3]}</h3>
                <p className={`${styles.type} ${isArabic ? styles.ar : ""}`}>{Our_services_service[3]}</p>
                <ol className={styles.ol} data-aos="fade-in" data-aos-duration="2000">
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[0]}</strong> {Our_services_type_Digital_marketing_info[0]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[1]}</strong> {Our_services_type_Digital_marketing_info[1]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[2]}</strong> {Our_services_type_Digital_marketing_info[2]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[3]}</strong> {Our_services_type_Digital_marketing_info[3]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[4]}</strong> {Our_services_type_Digital_marketing_info[4]}</li>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{Our_services_type_Digital_marketing[5]}</strong> {Our_services_type_Digital_marketing_info[5]}</li>
                </ol>
                <br />
            </div>
        </div >
    )
}

