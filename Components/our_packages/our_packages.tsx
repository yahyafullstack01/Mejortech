import styles from "../our_packages/our_packages.module.css";
import { TfiCheck } from "react-icons/tfi";
import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
export default function Join() {
    const {OurPakages_types, 
        OurPakages_list, OurPakages_Title,} = useContext(AppContext);
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

            <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
                <h1 className={styles.title}>Enter your Info here</h1>
                <form action="" method="Get" className={styles.form}>

                    <label className={styles.label} htmlFor={"Name"}>Name:
                        <input type={"text"} id="Name" name="name" className={styles.input} placeholder="Enter Your Name" />
                    </label>

                    <label className={styles.label} htmlFor={"Email"}>E-mail:
                        <input type={"email"} id="Email" name="email" className={styles.input} placeholder="Enter Your Email" />
                    </label>

                    <ul className={styles.type_con}>
                        <p className={styles.label} >Choose your Package:</p>
                        <div className={styles.package_con}>
                            <li>
                                <input type="radio" id="Basic" name="type" value="Basic" />
                                <label className={styles.lb} htmlFor={"Basic"}>Basic</label>
                            </li>
                            <li>
                                <input type="radio" id="Standard" name="type" value="Standard" />
                                <label className={styles.lb} htmlFor={"Standard"}>Standard</label>
                            </li>
                            <li>
                                <input type="radio" id="Premium" name="type" value="Premium" />
                                <label className={styles.lb} htmlFor={"Premium"}>Premium</label>
                            </li>
                        </div>

                    </ul>
                    <button className={styles.btn}>Send</button>
                </form>
            </div>
        </div>
    )
}

