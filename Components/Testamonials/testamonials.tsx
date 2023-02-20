import styles from "../Testamonials/testamonials.module.css";
import { IoIosStar } from "react-icons/io";

export default function Join() {
    return (
        <div className={`${styles.container} ${"flex flex-col relative"}`}>
            <h1 data-aos="fade-right" className={styles.header}>Testamonials</h1>
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/testa.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.box} ${"text-white"}`}>

                <div data-aos="fade-left" data-aos-duration="2000"  className={styles.card}>
                    <img
                        src="/test_1.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>John Smith</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.txt_con}>
                        “Great and friendly Team that love    what they are creating”
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="2000"  className={styles.card}>
                    <img
                        src="/test_2.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>Samantha Bill</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.txt_con}>
                        “I got the Premium package firstly for a great service ,
                        They were really friendly and helpful,
                        I was shocked when I picked the basic package this time and had the same welcoming service”
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000"  className={styles.card}>
                    <img
                        src="/test_3.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>Han Gray</h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.txt_con}>
                        “Project delivery on time with no mistakes , Would highly recommend ”
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="2000"  className={styles.card}>
                    <img
                        src="/test_4.jpg"
                        alt="The picture of a man"
                        className={`${styles.pic}`}
                    />
                    <div className="flex  items-center justify-between">
                        <h1 className={`${styles.name} ${"text-white"}`}>Alexia Peterson </h1>
                        <div className={styles.star_con}>
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                            <IoIosStar className={`${styles.star} ${"text-white"}`} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.txt_con}>
                        “Friendly , patient and a welcoming team to work with, best experience ever”
                    </div>
                </div>
            </div>
        </div>
    )
}