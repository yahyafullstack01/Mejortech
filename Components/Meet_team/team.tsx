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
                    {/* Lana card*/}
                    <div style={{ transform: side ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center  text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Business packaging (including outer, semantic, technical layers; USP).</li>
                                <li className={styles.list}>SEO promotion (including checking the semantic core for relevance, accuracy and completeness).</li>
                                <li className={styles.list}>Contextual advertising (including competitor analysis, collection of a wide semantic core and negative keywords, selection of landing pages).</li>
                                <li className={styles.list}>SMM promotion (wide coverage of the target audience in social networks (VK, Inst, Fb, TikTok).</li>
                                <li className={styles.list}>Target (including creating creatives, launching advertising campaigns, reporting, drawing up an advertising strategy, installing web analytics on the site).</li>
                            </ul>
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
                    {/* Yahya card*/}
                    <div style={{ transform: side2 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Bachelor's degree in computer science</li>
                                <li className={styles.list}>Creator of Responsive web applications</li>
                                <li className={styles.list}>Designer of UI/UX </li>
                                <li className={styles.list}>Management of different types of projects</li>
                                <li className={styles.list}>Three experience in React js </li>
                                <li className={styles.list}>coordinate efforts across teams to deliver software products successfully.</li>
                                <li className={styles.list}>Implementor of more than 25 projects in Web Development</li>
                            </ul>
                            <button onClick={() => flip2()} className={styles.btn_close}>Close</button>
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
                    {/* Samuel card*/}
                    <div style={{ transform: side3 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Demonstrated ability in business-to-business (B2B) sales</li>
                                <li className={styles.list}>Proficiency with word processing, spreadsheet and presentation software</li>
                                <li className={styles.list}>Problem-solving skills to propose mutually beneficial solutions</li>
                                <li className={styles.list}>Familiarity with the industry including equipment, logistics and supply-chain management</li>
                                <li className={styles.list}>Familiarity with project management methodologies</li>
                                <li className={styles.list}>Impeccable verbal and written communication skills</li>
                            </ul>
                            <button onClick={() => flip3()} className={styles.btn_close}>Close</button>
                        </div>
                        <div className={styles.front}>
                            <img
                                src="/samuel.jpg"
                                alt=""
                                className={`${styles.pic}`}
                            />
                            <p className={styles.name}>SAMUEL</p>
                            <span className={styles.title}>BUSNISS DEVELOPER</span>
                            <button onClick={() => flip3()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                    {/* Polina card*/}
                    <div style={{ transform: side4 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Led new talent acquisition and recruitment processes for over 50 new full-time hires</li>
                                <li className={styles.list}>Worked with team members 1 to 1 and in small groups to enhance performance and employee satisfaction</li>
                                <li className={styles.list}>Provided guidance on employee relations and matters of corrective action that reduced turnover rates by 8%</li>
                                <li className={styles.list}>Assisted with new employee onboarding</li>
                                <li className={styles.list}>Administered company-wide compensation and benefit plans</li>
                            </ul>
                            <button onClick={() => flip4()} className={styles.btn_close}>Close</button>
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
                    {/* Samer card*/}
                    <div style={{ transform: side5 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Bachelor's degree in computer science</li>
                                <li className={styles.list}>Creator of Responsive web applications</li>
                                <li className={styles.list}>Designer of UI/UX </li>
                                <li className={styles.list}>Knowledge of Differet web languages</li>
                                <li className={styles.list}>Builder and modifier of Rest Api's</li>
                                <li className={styles.list}>Team worker with different projects and types of applications</li>
                                <li className={styles.list}>Implementor of more than 20 projects in Web Development</li>

                            </ul>
                            <button onClick={() => flip5()} className={styles.btn_close}>Close</button>
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
                    {/* Alina card*/}
                    <div style={{ transform: side6 ? "rotateY(180deg)" : "" }} className={`${styles.holder} ${"flex flex-col items-center text-center "}`}>
                        <div className={styles.back}>
                            <ul className={styles.listcon}>
                                <li className={styles.list}>Working knowledge of test management software (e.g. qTest, Zephyr) and SQL</li>
                                <li className={styles.list}>Familiarity with Agile frameworks and regression testing</li>
                                <li className={styles.list}>Analytical mind and problem-solving aptitude</li>
                                <li className={styles.list}>BSc/BA in Computer Science, Engineering or a related field</li>
                                <li className={styles.list}>Strong organizational skills</li>
                                <li className={styles.list}>Experience in project management and QA methodology</li>
                                <li className={styles.list}>Excellent communication skills</li>
                            </ul>
                            <button onClick={() => flip6()} className={styles.btn_close}>Close</button>
                        </div>

                        <div className={styles.front}>
                            <img
                                src="/Alina.jpg"
                                alt=""
                                className={`${styles.Alina} ${styles.pic}`}
                            />
                            <p className={styles.name}>ALINA</p>
                            <span className={styles.title}>QA Tester</span>
                            <button onClick={() => flip6()} className={styles.btn}>Read Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}