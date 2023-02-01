import styles from "../Meet_team/team.module.css";
import { AppContext } from "../../Mycontext/context";
import { useContext } from "react";



export default function Team() {
    const { side, side2, side3, side4, side5, side6, flip, flip2, flip3, flip4, flip5, flip6 } = useContext(AppContext);
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
                <h1 className={`${styles.header} ${"text-center"}`}>MEET THE TEAM</h1>
                <div className={`${styles.Grid}`}>
                    <div style={{ transform: side ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center  text-center "}`}>
                        <div className={styles.back}>

                            <button onClick={() => flip()} className={styles.btn_close}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/sevetlana.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>LANA</p>
                            <span className={styles.title}>MARKETING DIRECTOR</span>
                            <button onClick={() => flip()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    <div style={{ transform: side2 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <h1>back</h1>

                            <h1>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </h1>
                            <button onClick={() => flip2()} className={styles.btn}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/yahya.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>YAHYA</p>
                            <span className={styles.title}>
                                PROJECT MANAGER<br></br>
                                FULL-STACK DEVELOPER
                            </span>
                            <button onClick={() => flip2()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    <div style={{ transform: side3 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <h1>back</h1>

                            <h1>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </h1>
                            <button onClick={() => flip3()} className={styles.btn}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/samuel.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>SAMUEL</p>
                            <span className={styles.title}>BUSNISS DEVELOPER</span>
                            <button onClick={() => flip3()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    <div style={{ transform: side4 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <h1>back</h1>

                            <h1>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </h1>
                            <button onClick={() => flip4()} className={styles.btn}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/polina.jpg"
                                alt="polina picture"
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>Polina</p>
                            <span className={styles.title}>HR Consultant recruitment</span>
                            <button onClick={() => flip4()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    <div style={{ transform: side5 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <h1>back</h1>

                            <h1>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </h1>
                            <button onClick={() => flip5()} className={styles.btn}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/samer.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>SAMER</p>
                            <span className={styles.title}>Front-end-developer</span>
                            <button onClick={() => flip5()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    <div style={{ transform: side6 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <h1>back</h1>
                            <h1>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </h1>
                            <button onClick={() => flip6()} className={styles.btn}>Close</button>
                        </div>

                        <div className={styles.front}>
                            <img
                                src="/samuel.jpeg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>SAMUEL</p>
                            <span className={styles.title}>QA Tester</span>
                            <button onClick={() => flip6()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}