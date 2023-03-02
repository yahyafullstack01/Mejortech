import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";

export default function SignUp() {
    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns,
        signUp,
        valueEmail, valuePassword, email, password } = useContext(AppContext);
    return (
        <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
            <h1 className={styles.title}>{Form_title[2]}</h1>
            <form action="" method="Get" className={`${styles.form} ${isArabic ? styles.ar : ""}  ${styles.form_signUp}`}>
                <label className={styles.label} htmlFor={"Name"}>{Form_Labels[0]}
                    <input type={"text"} required id="Name" name="name" className={styles.input} placeholder={`${Form_place_holders[0]}`} />
                </label>
                <label className={styles.label} htmlFor={"Email"}>{Form_Labels[1]}
                    <input type={"email"} required id="Email" name="email" className={styles.input} placeholder={`${Form_place_holders[1]}`} />
                </label>
                <label className={styles.label} htmlFor={"Password"}>{Form_Labels[2]}
                    <input type={"password"} required id="Password" name="password" className={styles.input} placeholder={Form_place_holders[2]} />
                </label>
                <label className={`${styles.label}`} htmlFor={"Language"}>
                    <label>{Form_Labels[4]}</label>

                    <div className={styles.checkbox_con}>
                        <input type={"checkbox"} id="English" name="English" value={"English"} className={`${styles.input} ${styles.fixlanguages}`} />
                        <label htmlFor={"English"} className={`${styles.fixlanguages}`}>English</label>
                    </div>

                    <div className={styles.checkbox_con}>
                        <input type={"checkbox"} id="Spanish" name="Spanish" value={"Spanish"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Spanish"} className={`${styles.fixlanguages}`}>Spanish</label>
                    </div>

                    <div className={styles.checkbox_con}>
                        <input type={"checkbox"} id="Arabic" name="Arabic" value={"Arabic"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Arabic"} className={`${styles.fixlanguages}`}>Arabic</label>
                    </div>
                    <div className={styles.checkbox_con}>
                        <input type={"checkbox"} id="Russian" name="Russian" value={"Russian"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Russian"} className={`${styles.fixlanguages}`}>Russian</label>
                    </div>

                </label>
                <label htmlFor={"from where"} className={`${styles.label}`} >{Form_Labels[5]}
                    <select name="from where" className={`${styles.selection} ${"text-[#907730;]"}`} id="from where" >
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Through a friend">Through a friend</option>
                        <option value="Other">Other</option>

                    </select>
                </label>
                <ul className={styles.type_con} >
                    <p className={styles.label} >{Form_Labels[8]}</p>
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
                <button className={styles.btn_nm}>{Form_btns[4]}</button>
            </form>
        </div>
    )
}