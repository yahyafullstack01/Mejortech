import styles from "./UserProfile.module.css";

export default function UserProfile() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Profile</h1>

            <div className={styles.Box}>
                <div className={styles.Block_1}>
                    <img
                        src="/yahya.jpeg"
                        alt="The Picture of the User"
                        className={styles.User_pic}
                    />
                    <div className={styles.Btn_container}>
                        <button className={styles.change}>Change Profile Picture</button>
                        <button className={styles.change}>Change Password</button>
                    </div>
                </div>

                <div className={styles.Block_2}>
                    <p className={styles.data}>Name :
                        <span className={styles.info}>Yahya Alloucha</span>
                    </p>
                    <p className={styles.data}>Email :
                        <span className={styles.info}>Yahya@gmail.com</span>
                    </p>
                    <p className={styles.data}>Phone :
                        <span className={styles.info}>666547458</span>
                    </p>
                    <p className={styles.data}>Nationality :
                        <span className={styles.info}>Morrocan</span>
                    </p>
                    <p className={styles.data}>Projects :
                        <span className={styles.info}>3</span>
                    </p>
                    <p className={styles.data}>Meetings :
                        <span className={styles.info}>3</span>
                    </p>
                </div>
            </div>
        </div>
    )
}