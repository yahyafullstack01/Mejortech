import styles from "../our_packages/our_packages.module.css";
import { TfiCheck } from "react-icons/tfi";

export default function Join() {
    return (
        <div  className={styles.container}>
            <h1 data-aos="fade-right" className={styles.header}>Our Packages</h1>

            <div className={styles.grid}>
                <div data-aos="zoom-out-down" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/card_bg.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={`${styles.price} ${styles.price1}`}>50$</h1>
                    <h2 className={styles.type}>Basic</h2>

                    <ul className={`${styles.list} ${"flex flex-col "}`}>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Responsive design</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>pages (4)</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Modification (2)</p>
                        </li>
                    </ul>
                </div>

                <div data-aos="zoom-out-down" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/card_bg.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={`${styles.price} ${styles.price2}`}>130$</h1>
                    <h2 className={styles.type}>Standard</h2>

                    <ul className={`${styles.list} ${"flex flex-col "}`}>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Responsive design</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>pages (4)</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Modification (2)</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Seo optimization </p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Include source code</p>
                        </li>

                    </ul>
                </div>

                <div  data-aos="zoom-out-down" data-aos-duration="2000"className={styles.card}>
                    <img
                        src="/card_bg.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={`${styles.price} ${styles.price2}`}>500$</h1>
                    <h2 className={styles.type}>Premium</h2>

                    <ul className={`${styles.list} ${"flex flex-col "}`}>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Responsive design</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>pages (4)</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Modification (2)</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Seo optimization </p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Include source code</p>
                        </li>
                        <li className="flex items-center text-cneter text-white">
                            <TfiCheck className={styles.tick} />
                            <p className={styles.info}>Include Hosting</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

