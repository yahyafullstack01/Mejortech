import styles from "../What_we_do/we_do.module.css";

export default function OurWork() {

    return (
        <div data-aos="fade-in"  data-aos-duration="2000" id="Our_work" className={styles.container}>
            <h1 className={`${styles.header} ${"text-center"}`}>WHAT WE DO</h1>
            <div className={styles.grid}>
                <div data-aos="fade-right"  data-aos-duration="2000" className={styles.block}>
                    <img
                        src="/Laptop.jpg"
                        alt="The IT picture"
                        className={`${styles.pic}`}
                    />
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>IT PROJECTS</h1>
                        <p className={styles.text}>Find Out About Our Projects, Methods, And The Results Of Our Decades Of Advocacy.</p>
                        <button className={styles.btn}>Learn more</button>
                    </div>
                </div>
                <div data-aos="fade-left"  data-aos-duration="2000" className={styles.block} >
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>EDUCATION</h1>
                        <p className={styles.text}>Ready To Take The Next Step? You Can Learn New Things And Improve Yourself In The Future.</p>
                        <button className={styles.btn}>Learn more</button>
                    </div>
                   
                    <img
                        src="/library.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                </div>
                <div data-aos="fade-right"  data-aos-duration="2000" className={styles.block}>
                    <img
                        src="/marketing.jpg"
                        alt="The marketing picture"
                        className={`${styles.pic}`}
                    />
                    <div className={styles.text_block}>
                        <h1 className={`${styles.header} ${"text-center"}`}>MARKETING</h1>
                        <p className={styles.text}>Enter  A World That Adapts This New Generation, That Opens Many Doors To Success.</p>
                        <button className={styles.btn}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}