import styles from "../About_us/about.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next"
export default function About() {

    const { t, i18n } = useTranslation("Home");

    const isArabic = i18n.language === "ar"; 

    return (
        <div
            id="About"
            className={`${styles.container} ${"h-auto items-center justify-center bg-black flex flex-col mt-10  py-10 sm:h-auto  md:flex-row md:justify-between md:h-screen"} ${isArabic ? styles.ar : ""}`}
            data-aos="zoom-in"
            data-aos-duration="3000"
        >
            <div className={`${styles.txt_con} ${" w-auto h-auto pt-15 sm:w-10/12 md:w-3/6 md:h-auto md:pt-17"} ${isArabic ? styles.ar : ""}`}>
                <h1 className={`${styles.h1} ${"text-6xl lg:text-xl xl:pt-26 xl:text-6xl"}`}>{t("Title_2")}</h1>
                <p className="text-white pt-5 pl-5 pr-0 text-xl leading-normal  md:text-lg md:pt-6 lg:pt-5 xl:pt-30 xl:text-3xl 2xl:text-2xl">
                    {t("Para_3")}
                    <br></br>
                    <br></br>
                    {t("Para_4")}
                    <br></br>
                    <br></br>
                    {t("Para_5")}
                    <br></br>
                    {t("Para_6")}
                </p>
            </div>
            <Image src="/about.jpg" alt="About" width={500}
                height={500} className={`${"h-screen w-auto mt-8 sm:h-98 sm:w-10/12 md:w-2/5 md:h-full md:mt-0 xl:ml-20"}`}
            />
        </div>
    )
}