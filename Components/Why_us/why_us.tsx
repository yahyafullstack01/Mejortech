import styles from "../Why_us/why_us.module.css";

export default function Why_us() {

    return (
        <div className={styles.container}>
            <h1 data-aos="fade-right" className={styles.header}>Why choose Us</h1>

            <div className={styles.grid}>
                <ul data-aos="fade-right" className={styles.p}>
                    <li>We are highly qualified engineers that possess superior technical expertise and practical understanding of the most recent software standards.</li>
                    <br></br>
                    <li>having amassed a sizable body of expertise, which we use to provide solutions that satisfy the demands, expectations, and financial constraints of our clients.</li>
                    <br></br>
                    <li> Our multilingual staff that speaks English, Arabic, Russian, Spanish, French and Having many years of experience working with clients from around the world.</li>
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