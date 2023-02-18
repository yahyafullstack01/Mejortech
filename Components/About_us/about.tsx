import styles from "../About_us/about.module.css";
import Image from "next/image";
import {useTranslation} from "next-i18next"
export default function About() {

    const { t, i18n } = useTranslation();

    const isArabic = i18n.language === "ar";

    return (
        <div
            id="About"
            className={`${styles.container} ${"h-auto items-center justify-center bg-black flex flex-col mt-10  py-10 sm:h-auto  md:flex-row md:justify-between md:h-screen"} ${isArabic ? styles.ar : ""}`}
            data-aos="zoom-in"
            data-aos-duration="3000"
        >
            <div className=" w-auto h-auto pt-15 sm:w-10/12 md:w-3/6 md:h-auto md:pt-17">
                <h1 className={`${styles.h1} ${"text-6xl lg:text-xl xl:pt-26 xl:text-6xl"}`}>ABOUT US</h1>
                <p className="text-white pt-5 pl-5 pr-0 text-xl leading-normal  md:text-lg md:pt-6 lg:pt-5 xl:pt-30 xl:text-3xl 2xl:text-2xl">
                    A Rising Company, With The Combination Of <br></br> Young People And Experience, Team Of<br></br>Developers , Teachers And Much More From<br></br>Different Countries.<br></br>
                    <br></br>We Succeed In Technological Projects That<br></br>Include Converting Difficult Ideas To Reality.<br></br>
                    <br></br> We Have Teachers That Have Different<br></br>Knowledge And Experience.<br></br>
                    They Are Going To Teach You Everything Step By Step To Reach Your Goal.
                </p>
            </div>
            <Image src="/about.jpg" alt="About" width={500}
                height={500} className={`${"h-screen w-auto mt-8 sm:h-98 sm:w-10/12 md:w-2/5 md:h-full md:mt-0 xl:ml-20"}`} />
        </div>
    )
}