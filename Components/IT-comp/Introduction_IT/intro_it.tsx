import styles from "../../Home-comp/Introduction/intro.module.css"
import { AppContext } from "../../../Mycontext/context"
import { useContext } from "react"


export default function Intro() {

    const { Intro_info } = useContext(AppContext);

    return (
        <div className="flex flex-col relative ">
            <video
                loop={true}
                muted={true}
                controls={false}
                autoPlay={true}
                className={styles.vid}
            >
                <source src="/it.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.container_2} ${"w-full  flex flex-col justify-center "}`}>
                <div data-aos="zoom-in" data-aos-duration="2000" className={styles.circle}>
                    <h1 className={styles.title}>{Intro_info[0]}<br></br>{Intro_info[1]}</h1>
                    <img
                        src="/logo.png"
                        alt=""
                        className={styles.logo_bg}
                    />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.ticker}>
                        <p className={styles.text_ticker}>{Intro_info[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}