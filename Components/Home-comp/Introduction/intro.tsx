import styles from "../Introduction/intro.module.css"
import { useTranslation } from "next-i18next";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from 'react';


export default function Intro() {
    const { isArabic, isRussain, isSpanish } = useContext(AppContext)
    const { t } = useTranslation("Home");

    return (
        <div className="flex flex-col relative">
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
            >
                <source src="/intro.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.container} ${"w-full  flex flex-col absolute"} ${isArabic ? styles.ar : ""} ${isRussain ? styles.ru : ""} ${isSpanish ? styles.es : ""}`}>
                <h1 className={`${styles.H1} ${"text-center w-full"} ${"animate__animated animate__lightSpeedInLeft animate__slower "}`}>{t("Title")}</h1>
                <h2 className={`${styles.H2} ${"text-center w-full"} ${"animate__animated animate__zoomInDown animate__slower"}`}>{t("Para_1")}</h2>
                <h3 className={`${styles.H2} ${"text-center w-full"} ${"animate__animated animate__zoomInDown animate__slower"}`}>{t("Para_2")}</h3>
            </div>
        </div>
    )


}