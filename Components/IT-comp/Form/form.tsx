import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";


export default function Form() {

    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns } = useContext(AppContext);
    return (
        <div className={styles.container}>

            <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
                <h1 className={styles.title}>{Form_title}</h1>
                <form action="" method="Get" className={`${styles.form} ${isArabic ? styles.ar : ""}`}>

                    <label className={styles.label} htmlFor={"Name"}>{Form_Labels[0]}
                        <input type={"text"} id="Name" name="name" className={styles.input} placeholder={`${Form_place_holders[0]}`} />
                    </label>

                    <label className={styles.label} htmlFor={"Email"}>{Form_Labels[1]}
                        <input type={"email"} id="Email" name="email" className={styles.input} placeholder={`${Form_place_holders[1]}`} />
                    </label>

                    <ul className={styles.type_con}>
                        <p className={styles.label} >{Form_Labels[2]}</p>
                        <div className={styles.package_con}>
                            <li>
                                <input type="radio" id="Basic" name="type" value="Basic" />
                                <label className={styles.lb} htmlFor={"Basic"}>{Form_btns[0]}</label>
                            </li>
                            <li>
                                <input type="radio" id="Standard" name="type" value="Standard" />
                                <label className={styles.lb} htmlFor={"Standard"}>{Form_btns[1]}</label>
                            </li>
                            <li>
                                <input type="radio" id="Premium" name="type" value="Premium" />
                                <label className={styles.lb} htmlFor={"Premium"}>{Form_btns[2]}</label>
                            </li>
                        </div>

                    </ul>
                    <button className={styles.btn}>{Form_btns[3]}</button>
                </form>
            </div>

        </div>
    )
}

