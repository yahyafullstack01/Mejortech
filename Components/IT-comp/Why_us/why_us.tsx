import styles from "../Why_us/why_us.module.css";
import { useContext } from "react";
import { AppContext } from "../../../Mycontext/context";


export default function Why_us() {
    const { WhyUs_list, WhyUs_title, isArabic } = useContext(AppContext);

    return (
        <div className={`${styles.container} `}>
            <h1 data-aos="fade-right" className={styles.header}>{WhyUs_title}</h1>

            <div className={`${styles.grid} ${isArabic ? styles.ar : ""}`}>
                <ul data-aos="fade-right" className={`${styles.p} ${isArabic ? styles.ar : ""}`}>
                    <li>{WhyUs_list[0]}</li>
                    <br></br>
                    <li>{WhyUs_list[1]}</li>
                    <br></br>
                    <li>{WhyUs_list[2]}</li>
                </ul>
                <img
                    data-aos="fade-left"
                    src="/why_us.jpg"
                    alt="The education picture"
                    className={`${styles.pic}`}
                />
            </div>

        </div>
    )
}