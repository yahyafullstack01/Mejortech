import styles from "../Footer/foot.module.css";

export default function foot() {
    return (
        <div className={`${styles.container} ${"flex items-baseline justify-between bg-black "}`}>

            <div className={`${styles.bar} ${"flex flex-col"}`}>
                <h1 className={`${styles.title} ${"text-white"}`}>EL MEJOR TECH</h1>
                <a className={`${styles.mail} ${"text-white"}`} href="mailto:technologymejor@gmail.com">technologymejor@gmail.com</a>
            </div>

            <div className={`${styles.bar_2} ${"flex "}`}>

                <div className={`${styles.bar_3} ${"flex flex-col"}`}>
                    <h1 className={`${styles.title_2} ${"items-white text-white"}`}>HOURS</h1>
                    <span className={`${styles.date_time} ${"items-white text-white"}`}>Monday – Friday</span>
                    <span className={`${styles.date_time} ${"items-white text-white"}`}>10am – 6pm</span>
                </div>

                <div className={`${styles.bar_3} ${"flex flex-col"}`}>
                    <h1 className={`${styles.title_2} ${"items-white text-white"}`}>FOLLOW</h1>
                    <a
                        className={`${styles.mail} ${"text-white"}`}
                        href="https://www.facebook.com/profile.php?id=100089158682345"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Facebook
                    </a>
                    <a
                        className={`${styles.mail} ${"text-white"}`}
                        href="https://www.instagram.com/mejortechnologies"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Instagram
                    </a>
                    <a
                        className={`${styles.mail} ${"text-white"}`}
                        href="https://twitter.com/MejorTechnology"
                        target="_blank"
                        rel="noreferrer"
                        >
                        twiiter
                    </a>
                </div>
            </div>
        </div>
    )
}