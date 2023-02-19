import styles from "../Join_us/join.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next"

export default function Join() {
    const { t } = useTranslation("Home");

    const Block_Join_titles: any = t('Block_Join_titles', { returnObjects: true });
    const Block_Join_info: any = t('Block_Join_info', { returnObjects: true });

    return (
        <div className={styles.container}>
            <h1 data-aos="fade-down" data-aos-duration="2000" className={styles.header}>{t("Title_5")}</h1>
            <div className={styles.box}>
                <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/it.jpeg"
                        alt="The it picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>{Block_Join_titles[0]}</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>{Block_Join_info[0]}</p>
                    <Link className={styles.link} passHref href="/IT_Page/IT"><button className={styles.btn}>{t("Join_btn")}</button></Link>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/education.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>{Block_Join_titles[1]}</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>{Block_Join_info[1]}</p>
                    <Link className={styles.link} passHref href="/Education_Page/Education"><button className={styles.btn}>{t("Join_btn")}</button></Link>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/marketing.jpeg"
                        alt="The marketing picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={styles.title}>{Block_Join_titles[2]}</h1>
                    <span className={styles.time}>10.21 7:00-8:00PM</span>
                    <p className={styles.info}>{Block_Join_info[2]}</p>
                    <Link className={styles.link} passHref href="/Marketing_Page/Marketing"><button className={styles.btn}>{t("Join_btn")}</button></Link>
                </div>
            </div>
        </div>
    )
}