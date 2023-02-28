import styles from "./UserNavbar.module.css";

export default function UserNavbar(){
    return(
        <div className={styles.navbar}>
            <button className={styles.btn}>My profile</button>
            <button className={styles.btn}>My projects</button>
            <button className={styles.btn}>My meetings</button>
        </div>
    )
}