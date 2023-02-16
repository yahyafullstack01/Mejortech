import { useState } from "react";
import styles from "../What_we_do/we_do.module.css";

export default function OurWork() {

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
                        <li className={styles.list}>Business packaging <code style={{ color: "#907730" }}>(including outer, semantic, technical layers)</code>.</li>
                        <li className={styles.list}>SEO promotion <code style={{ color: "#907730" }}>(including checking the semantic core for relevance, accuracy and completeness)</code>.</li>
                        <li className={styles.list}>Contextual advertising <code style={{ color: "#907730" }}>(including competitor analysis, collection of a wide semantic core and negative keywords, selection of landing pages)</code>.</li>
                        <li className={styles.list}>SMM promotion wide coverage of the target audience in social networks <code style={{ color: "#907730" }}>(VK, Inst, Fb, TikTok)</code>.</li>
                        <li className={styles.list}>Target <code style={{ color: "#907730" }}>(including creating creatives, launching advertising campaigns, installing web analytics on the site)</code>.</li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div data-aos="fade-in" data-aos-duration="2000" id="Our_work" className={styles.container}>
            <h1 className={`${styles.header} ${"text-center"}`}>WHAT WE DO</h1>
            <div className={styles.grid}>

                {/*IT Block*/}
                <div data-aos="fade-right" data-aos-duration="2000" className={styles.block}>
                    <div className={styles.con}>
                        {LearnIT()}
                    </div>
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>IT PROJECTS</h1>
                        <p className={styles.text}>Find Out About Our Projects, Methods, And how we work.</p>
                        <button className={styles.btn} onClick={() => setChangediv(!changediv)}>{changediv ? "Go Back" : "Learn more"}</button>
                    </div>
                </div>

                {/*Education Block*/}
                <div data-aos="fade-left" data-aos-duration="2000" className={styles.block} >
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>EDUCATION</h1>
                        <p className={styles.text}>Ready To Take The Next Step? You Can Learn New Things And Improve Yourself In The Future.</p>
                        <button className={styles.btn} onClick={() => setChangediv2(!changediv2)}>{changediv2 ? "Go Back" : "Learn more"}</button>
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
                        <h1 className={`${styles.header} ${"text-center"}`}>MARKETING</h1>
                        <p className={styles.text}>Enter  A World That Adapts This New Generation, That Opens Many Doors To Success.</p>
                        <button className={styles.btn} onClick={() => setChangediv3(!changediv3)}>{changediv3 ? "Go Back" : "Learn more"}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}



