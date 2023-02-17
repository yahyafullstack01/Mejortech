import styles from "../Introduction/intro.module.css"
import { useTranslation } from "next-i18next";


export default function Intro() {

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
            <div className={`${styles.container} ${"w-full  flex flex-col absolute"}`}>
                <h1 className={`${styles.H1} ${"text-center w-full"} ${"animate__animated animate__lightSpeedInLeft animate__slower "}`}>{t("Home:Title")}</h1>
                <h2 className={`${styles.H2} ${"text-center w-full"} ${"animate__animated animate__zoomInDown animate__slower"}`}>THE BEST SPOT FOR IT , EDUCATION , MARKETING AND MUCH MORE</h2>
                <h3 className={`${styles.H2} ${"text-center w-full"} ${"animate__animated animate__zoomInDown animate__slower"}`}>JOIN US AND EXPLORE NEW HORIZONS</h3>
            </div>
        </div>
    )


}
// WELCOME TO EL MEJOR TECH
//{t("Home:Home_here")}


