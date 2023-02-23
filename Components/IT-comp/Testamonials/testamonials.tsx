import styles from "../Testamonials/testamonials.module.css";
import { IoIosStar } from "react-icons/io";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function Join() {
    const {
        isArabic,
        Testemon_title, Testemoniels_names,
        Testemoniels_Quotes } = useContext(AppContext);
    return (
        <div className={`${styles.container} ${"flex flex-col relative"}`}>
            <h1 data-aos="fade-right" className={styles.header}>{Testemon_title}</h1>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/testa.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.box} ${"text-white"}`}>

                <div data-aos="fade-left" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/test_1.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>{Testemoniels_names[0]}</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={`${styles.txt_con} ${isArabic ? styles.ar : ""}`}>
                        {Testemoniels_Quotes[0]}
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/test_2.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>{Testemoniels_names[1]}</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={`${styles.txt_con} ${isArabic ? styles.ar : ""}`}>
                        {Testemoniels_Quotes[1]}
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/test_3.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>{Testemoniels_names[2]}</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={`${styles.txt_con} ${isArabic ? styles.ar : ""}`}>
                        {Testemoniels_Quotes[2]}
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/test_4.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>{Testemoniels_names[3]}</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={`${styles.txt_con} ${isArabic ? styles.ar : ""}`}>
                        {Testemoniels_Quotes[3]}
                    </div>
                </div>
            </div>
        </div>
    )
}