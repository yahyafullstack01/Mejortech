import { useState } from "react";
import styles from "../What_we_do/we_do.module.css";

export default function OurWork() {

    const [changediv, setChangediv] = useState(false);
    const [changediv2, setChangediv2] = useState(false);
    const [changediv3, setChangediv3] = useState(false);


    function LearnIT() {
        if (!changediv) {
            return (

                <img
                    src={"/laptop.jpg"}
                    alt="The education picture"
                    className={`${styles.pic}`}
                />
            )
        }
        else {
            return (
                <h1>Hello there</h1>
            )
        }

    }
    function LearnEducation() {
        if (!changediv2) {
            return (

                <img
                    src={"/library.jpg"}
                    alt="The education picture"
                    className={`${styles.pic}`}
                />
            )
        }
        else {
            return (
                <img
                    src={"/marketing.jpg"}
                    alt="The education picture"
                    className={`${styles.pic}`}
                />
            )
        }

    }
    function LearnMarketing() {
        if (!changediv3) {
            return (

                <img
                    src={"/marketing.jpg"}
                    alt="The education picture"
                    className={`${styles.pic}`}
                />
            )
        }
        else {
            return (
                <h1>Hello there</h1>
            )
        }

    }


    return (
        <div data-aos="fade-in" data-aos-duration="2000" id="Our_work" className={styles.container}>
            <h1 className={`${styles.header} ${"text-center"}`}>WHAT WE DO</h1>
            <div className={styles.grid}>

              {/*IT Block*/}
                <div data-aos="fade-right" data-aos-duration="2000" className={styles.block}>
                    {/* <img
                        src="/Laptop.jpg"
                        alt="The IT picture"
                        className={`${styles.pic}`}
                    /> */}
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

                    {/* <img
                        src="/library.jpg"
                        alt="The marketing picture"
                        className={`${styles.pic}`}
                    /> */}

                </div>

                {/*Marketing Block*/}
                <div data-aos="fade-right" data-aos-duration="2000" className={styles.block}>
                    {/* <img
                        src="/marketing.jpg"
                        alt="The marketing picture"
                        className={`${styles.pic}`}
                    /> */}

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