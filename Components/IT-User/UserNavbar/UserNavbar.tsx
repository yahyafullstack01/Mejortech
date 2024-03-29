import { AppContext } from "../../../Mycontext/context";
import styles from "./UserNavbar.module.css";
import { useContext } from "react";

export default function UserNavbar() {

    const { User_Profile, User_Projects } = useContext(AppContext)
    return (
        <div className={styles.navbar}>
            <button className={styles.btn} onClick={User_Profile}>My profile</button>
            <button className={styles.btn} onClick={User_Projects}>My projects</button>
            <button className={styles.btn}>My meetings</button>
        </div>
    )
}