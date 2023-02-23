import { useState } from "react";
import styles from "../What_we_do/we_do.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
export default function OurWork() {

    const { t, isArabic, Titles, Info, Card_titles, Card_ED, Card_IT, Card_MK, Card_btn } = useContext(AppContext);

    // for animation Card
    const [changediv, setChangediv] = useState(false);
    const [changediv2, setChangediv2] = useState(false);
    const [changediv3, setChangediv3] = useState(false);

    //Function that changes Between The picture and text in
    function LearnIT() {
        // if (!changediv) {
        return (
            <>
                <img
                    src={"/Laptop.jpg"}
                    alt="The It picture"
                    className={`${styles.pic} ${changediv ? `${styles.animating}` : ""}`}
                />

                <div className={`${styles.Text_block_Learn} ${changediv ? "" : `${styles.animating}`} ${isArabic ? styles.ar : ""}`}>
                    <h1 className={styles.title_Learn}>{Card_titles[0]}</h1>
                    <ul className={`${styles.list_con_Learn} ${isArabic ? styles.ar : ""}`}>
                        {Card_IT && Card_IT.map((item: string) => (
                            <li key={item} className={styles.list}>{item}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
        // }


    }
    function LearnEducation() {
        return (
            <>
                <img
                    src={"/library.jpg"}
                    alt="The education picture"
                    className={`${styles.pic} ${changediv2 ? `${styles.animating}` : ""}`}
                />

                <div className={`${styles.Text_block_Learn} ${changediv2 ? "" : `${styles.animating}`} ${isArabic ? styles.ar : ""}`}>
                    <h1 className={styles.title_Learn}>{Card_titles[1]}</h1>
                    <ul className={`${styles.list_con_Learn} ${isArabic ? styles.ar : ""}`}>
                        {Card_ED && Card_ED.map((item: string) => (
                            <li key={item} className={styles.list}>{item}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
    function LearnMarketing() {
        return (
            <>
                <img
                    src={"/marketing.jpg"}
                    alt="The Marketing picture"
                    className={`${styles.pic} ${changediv3 ? `${styles.animating}` : ""}`}
                />

                <div className={`${styles.Text_block_Learn} ${changediv3 ? "" : `${styles.animating}`} ${isArabic ? styles.ar : ""}`}>
                    <h1 className={styles.title_Learn}>{Card_titles[1]}</h1>
                    <ul className={`${styles.list_con_Learn} ${isArabic ? styles.ar : ""}`}>
                        {Card_MK && Card_MK.map((item: string) => (
                            <li key={item} className={styles.list}>{item}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div data-aos="fade-in" data-aos-duration="2000" id="Our_work" className={styles.container}>
            <h1 className={`${styles.header} ${"text-center"}`}>{t("Title_4")}</h1>
            <div className={styles.grid}>

                {/*IT Block*/}
                <div data-aos="fade-right" data-aos-duration="2000" className={styles.block}>
                    <div className={styles.con}>
                        {LearnIT()}
                    </div>
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>{Titles[0]}</h1>
                        <p className={styles.text}>{Info[0]}</p>
                        <button className={styles.btn} onClick={() => setChangediv(!changediv)}>{changediv ? `${Card_btn[1]}` : `${Card_btn[0]}`}</button>
                    </div>
                </div>

                {/*Education Block*/}
                <div data-aos="fade-left" data-aos-duration="2000" className={styles.block} >
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>{Titles[1]}</h1>
                        <p className={styles.text}>{Info[1]}</p>
                        <button className={styles.btn} onClick={() => setChangediv2(!changediv2)}>{changediv ? `${Card_btn[1]}` : `${Card_btn[0]}`}</button>
                    </div>
                    <div className={`${styles.con}`}>
                        {LearnEducation()}
                    </div>
                </div>

                {/*Marketing Block*/}
                <div data-aos="fade-right" data-aos-duration="2000" className={styles.block}>
                    <div className={styles.con}>
                        {LearnMarketing()}
                    </div>
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>{Titles[2]}</h1>
                        <p className={styles.text}>{Info[2]}</p>
                        <button className={styles.btn} onClick={() => setChangediv3(!changediv3)}>{changediv ? `${Card_btn[1]}` : `${Card_btn[0]}`}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}



