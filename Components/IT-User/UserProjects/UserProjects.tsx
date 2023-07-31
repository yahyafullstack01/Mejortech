import styles from "./UserProjects.module.css";

export default function UserProfile() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Projects</h1>

            <div className={styles.Box}>
                <div className={styles.Project}>
                    <img
                        src="https://www.pangolinphoto.com/wp-content/uploads/2020/05/Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-scaled.webp"
                        alt=""
                        className={styles.Project_pic}
                    />
                    <p className={styles.info}>
                        <b className={styles.date}>09 Jun </b>
                        <span className="flex justify-between w-full">
                            <span className={styles.Project_name}>Photography Website</span>
                            <span className={styles.Project_country}>Spain</span>
                        </span>
                    </p>
                    <button className={styles.btn}>RSVP</button>
                </div>
                <div className={styles.Project}>
                    <img
                        src="https://www.jouav.com/wp-content/uploads/2022/10/multi-rotor-drone-under-sunset-1024x778.jpg"
                        alt=""
                        className={styles.Project_pic}
                    />
                    <p className={styles.info}>
                        <b className={styles.date}>17 Mar </b>
                        <span className="flex justify-between w-full">
                            <span className={styles.Project_name}>Drone Website </span>
                            <span className={styles.Project_country}>Dubai</span>
                        </span>
                    </p>
                    <button className={styles.btn}>RSVP</button>
                </div>
                <div className={styles.Project}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGIZZrldkKPdGB18Zlfh70I8MJLuEHSbn4Q&usqp=CAU"
                        alt=""
                        className={styles.Project_pic}
                    />
                    <p className={styles.info}>
                        <b className={styles.date}>12 Dec </b>
                        <span className="flex justify-between w-full">
                            <span className={styles.Project_name}>Booking Website</span>
                            <span className={styles.Project_country}>Bulgaria</span>
                        </span>

                    </p>
                    <button className={styles.btn}>RSVP</button>
                </div>
            </div>
        </div>
    )
}