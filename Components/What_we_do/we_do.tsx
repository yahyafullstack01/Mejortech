import { useState } from "react";
import styles from "../What_we_do/we_do.module.css";
import { useTranslation } from "next-i18next";

export default function OurWork() {

    const { t, i18n } = useTranslation("Home");
    const isArabic = i18n.language === "ar";

    const Titles: any = t('Block_titles', { returnObjects: true });
    const Info: any = t('Block_info', { returnObjects: true });
    const Card_titles: any = t('Card_Learn_title', { returnObjects: true });
    const Card_info: any = t('Card_Learn_info', { returnObjects: true });
    const Card_IT: any = t('Card_IT_info', { returnObjects: true });
    const Card_ED: any = t('Card_ED_info', { returnObjects: true });
    const Card_MK: any = t('Card_MK_info', { returnObjects: true });
    const Card_btn: any = t('Who_btn', { returnObjects: true });


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

                <div className={`${styles.Text_block_Learn} ${changediv ? "" : `${styles.animating}`}`}>
                    <h1 className={styles.title_Learn}>Our Work consists Of :</h1>
                    <ul className={styles.list_con_Learn}>
                        <li>Creating Web and Mobile Application.</li>
                        <li>Fetching Api's from different servers.</li>
                        <li>Storing Data in many types of softwares Like <code style={{ color: "#907730" }}>(Airtable, MongoDb, MySql)</code>.</li>
                        <li>Working with a proprietary issue tracking product such as <code style={{ color: "#907730" }}>(Jira)</code>to manage projects when working in a team.</li>
                        <li>Using Desgin tools such as <code style={{ color: "#907730" }}>(figma)</code> to Create or Implement App Desgins.</li>
                        <li>The use of Headless CMS such as <code style={{ color: "#907730" }}>(Sanity.io)</code> that helps the client to add, change or delete content in the App</li>
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

                <div className={`${styles.Text_block_Learn} ${changediv2 ? "" : `${styles.animating}`}`}>
                    <h1 className={styles.title_Learn}>You will Learn:</h1>
                    <ul className={styles.list_con_Learn}>
                        <li>Frontend development teaching you the basics  <code style={{ color: "#907730" }}>(Html, Css, Javascript)</code>.</li>
                        <li>From Beginner to Expert in English</li>
                        <li>Become a Fullstack developer , Learn how to create professonal Applications Using different frameworks such as <code style={{ color: "#907730" }}>(React js, Next js, Node js)</code>.</li>
                        <li>A chance to work on professional Projects.</li>
                        <li>Experience working in a professional team and how to interact with different clients .</li>
                        <li>professional education in  Digital marketing</li>

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

                <div className={`${styles.Text_block_Learn} ${changediv3 ? "" : `${styles.animating}`}`}>
                    <h1 className={styles.title_Learn}>You will Learn:</h1>
                    <ul className={styles.list_con_Learn}>
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



