import styles from "../Meet_team/team.module.css";
import { AppContext } from "../../Mycontext/context";
import { useContext } from "react";


export default function Team() {


    const { side, side2, side3, side4, side5, side6, flip, flip2, flip3, flip4, flip5, flip6, t, isArabic, Names, Yahya_info, Work, Lana_info, Samer_info, Samuel_info, Polina_info, Alina_info, Team_btn } = useContext(AppContext);
    return (
        <div
            id="Team" className={`${styles.container} ${"flex flex-col relative"}`}>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/team.mp4" type="video/mp4" />
            </video>

            <div className={`${styles.box} ${"text-white  w-full"}`}>
                <h1 className={`${styles.header} ${"text-center"}`}>{t("Title_3")}</h1>
                <div className={`${styles.Grid}`}>
                    {/* Lana card*/}
                    <div style={{ transform: side ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center  text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Lana_info && Lana_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => flip()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/sevetlana.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[0]}</p>
                            <span className={styles.title}> {Work[0]}</span>
                            <button onClick={() => flip()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                    {/* Yahya card*/}
                    <div style={{ transform: side2 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Yahya_info && Yahya_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>))}
                            </ul>
                            <button onClick={() => flip2()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/yahya.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[1]}</p>
                            <span className={styles.title}>
                                {Work[1]}
                                <br></br>
                                {Work[2]}
                            </span>
                            <button onClick={() => flip2()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                    {/* Samuel card*/}
                    <div style={{ transform: side3 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Samuel_info && Samuel_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => flip3()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/samuel.jpg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[2]}</p>
                            <span className={styles.title}> {Work[3]}</span>
                            <button onClick={() => flip3()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                    {/* Polina card*/}
                    <div style={{ transform: side4 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Polina_info && Polina_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => flip4()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/polina.jpg"
                                alt="polina picture"
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[3]}</p>
                            <span className={styles.title}> {Work[4]}</span>
                            <button onClick={() => flip4()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                    {/* Samer card*/}
                    <div style={{ transform: side5 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Samer_info && Samer_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => flip5()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/samer.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[4]}</p>
                            <span className={styles.title}> {Work[5]}</span>
                            <button onClick={() => flip5()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                    {/* Alina card*/}
                    <div style={{ transform: side6 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={`${styles.listcon} ${isArabic ? styles.ar : ""}`}>
                                {Alina_info && Alina_info.map((item: string) => (
                                    <li className={`${styles.list} ${isArabic ? styles.ar : ""}`}>{item}</li>
                                ))}
                            </ul>
                            <button onClick={() => flip6()} className={styles.btn_close}>{Team_btn[1]}</button>
                        </div>

                        <div className={styles.front}>
                            <img
                                src="/Alina.jpg"
                                alt=""
                                className={`${styles.Alina} ${styles.pic}`}
                            />
                            <p className={styles.name}>{Names[5]}</p>
                            <span className={styles.title}> {Work[6]}</span>
                            <button onClick={() => flip6()} className={styles.btn}>{Team_btn[0]}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}