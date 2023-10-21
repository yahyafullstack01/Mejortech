import styles from "../Our_Services/our_services.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function Team() {
    const {
        t, isArabic,
        Our_services_Types_title, Our_services_Types_about, Our_services_service,
        currentDev, currentMobile, currentFrontend, currentDigital,
        WebsiteDev, MobileDev, FrontTraining, DigitalMarket,
        WebDev_next_Slide, WebDev_prev_Slide, Mobile_next_Slide, Mobile_prev_Slide, Frontend_next_Slide, Frontend_prev_Slide,
        Digital_next_Slide, Digital_prev_Slide
    } = useContext(AppContext);

    return (
        <div
            id="Our_services" className={`${styles.container} ${"flex flex-col relative"}`}>
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
                    <button onClick={WebDev_prev_Slide} className={styles.slider_button}>
                        &#8592;
                    </button>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{WebsiteDev[currentDev].title}</strong>{WebsiteDev[currentDev].Description}</li>
                    <button onClick={WebDev_next_Slide} className={styles.slider_button}>
                        &#8594;
                    </button>
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
                    <button onClick={Mobile_prev_Slide} className={styles.slider_button}>
                        &#8592;
                    </button>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{MobileDev[currentMobile].title}</strong>{MobileDev[currentMobile].Description}</li>
                    <button onClick={Mobile_next_Slide} className={styles.slider_button}>
                        &#8594;
                    </button>
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
                    <button onClick={Frontend_prev_Slide} className={styles.slider_button}>
                        &#8592;
                    </button>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{FrontTraining[currentFrontend].title}</strong>{FrontTraining[currentFrontend].Description}</li>
                    <button onClick={Frontend_next_Slide} className={styles.slider_button}>
                        &#8594;
                    </button>
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
                    <button onClick={Digital_prev_Slide} className={styles.slider_button}>
                        &#8592;
                    </button>
                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}><strong className={`${styles.types} ${isArabic ? styles.ar : ""}`}>{DigitalMarket[currentDigital].title}</strong>{DigitalMarket[currentDigital].Description}</li>
                    <button onClick={Digital_next_Slide} className={styles.slider_button}>
                        &#8594;
                    </button>
                </ol>
                <br />
            </div>
        </div >
    )
}

