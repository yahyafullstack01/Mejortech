import styles from "../Footer/foot.module.css";
import { useTranslation } from "next-i18next";


export default function foot() {


    const { t, i18n } = useTranslation("Home");
    const isArabic = i18n.language === "ar";
    const Foot_about: any = t('Footer_about', { returnObjects: true });
    const Foot_info: any = t('Footer_info', { returnObjects: true });


    return (
        <div className={`${styles.container} ${"flex items-baseline justify-between bg-black "}`}>

            <div className={`${styles.bar} ${"flex flex-col"}`}>
                <h1 className={`${styles.title} ${"text-white"}`}>EL MEJOR TECH</h1>
                <a className={`${styles.mail} ${"text-white"}`} href="mailto:technologymejor@gmail.com">technologymejor@gmail.com</a>
            </div>

            <div className={`${styles.bar_2} ${"flex "}`}>

                <div className={`${styles.bar_3} ${"flex flex-col"}`}>
                    <h1 className={`${styles.title_2} ${"items-white text-white"}`}>{Foot_about[0]}</h1>
                    <span className={`${styles.date_time} ${"items-white text-white"} ${isArabic ? styles.ar : ""}`}>{Foot_info[0]}</span>
                    <span className={`${styles.date_time} ${"items-white text-white"} ${isArabic ? styles.ar : ""}`}>{Foot_info[1]}</span>
                </div>

                <div className={`${styles.bar_4}`}>
                    <h1 className={`${styles.title_2} ${"items-white text-white"}`}>{Foot_about[1]}</h1>
                    <div className={styles.link_con}>
                        <a
                            className={`${styles.mail} ${"text-white"}`}
                            href="https://twitter.com/MejorTechnology"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            className={`${styles.mail} ${"text-white"}`}
                            href="https://www.facebook.com/profile.php?id=100089158682345"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            className={`${styles.mail} ${"text-white"}`}
                            href="https://www.instagram.com/mejortechnologies"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            className={`${styles.mail} ${"text-white"}`}
                            href="https://twitter.com/MejorTechnology"
                            target="_blank"
                            rel="noreferrer"
                        >
                            twitter
                        </a>
                        <a
                            className={`${styles.mail} ${"text-white"}`}
                            href="https://twitter.com/MejorTechnology"
                            target="_blank"
                            rel="noreferrer"
                        >
                            telegram
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}