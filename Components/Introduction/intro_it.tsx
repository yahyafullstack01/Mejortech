import styles from "../Introduction/intro.module.css"
export default function Intro() {

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
                    <h1 className={styles.title}>Title</h1>
                    <img 
                      src="../logo.png"
                      alt=""
                      className={styles.logo_bg}
                    />
                </div>
            </div>
        </div>
    )
}