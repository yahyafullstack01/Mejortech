import styles from "../our_packages/our_packages.module.css";
import { TfiCheck } from "react-icons/tfi";
import { useContext } from "react";
import { AppContext } from "../../../Mycontext/context";
export default function Join() {
    const { OurPakages_types, OurPakages_Title, } = useContext(AppContext);
    return (
        <div className={styles.container}>
            <h1 data-aos="fade-right" className={styles.header}>{OurPakages_Title}</h1>

            <div className={styles.grid}>
                <div data-aos="zoom-out-down" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/card_bg.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={`${styles.price} ${styles.price1}`}>50$</h1>
                    <h2 className={styles.type}>{OurPakages_types[0]}</h2>

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
                    <h2 className={styles.type}>{OurPakages_types[1]}</h2>

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

                <div data-aos="zoom-out-down" data-aos-duration="2000" className={styles.card}>
                    <img
                        src="/card_bg.jpg"
                        alt="The education picture"
                        className={`${styles.pic}`}
                    />
                    <h1 className={`${styles.price} ${styles.price2}`}>500$</h1>
                    <h2 className={styles.type}>{OurPakages_types[2]}</h2>

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

