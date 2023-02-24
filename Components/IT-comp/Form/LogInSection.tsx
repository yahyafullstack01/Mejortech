import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";

export default function LogIn() {

    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns } = useContext(AppContext);
    return (
        <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
            <h1 className={styles.title}>Log In here</h1>
            <form action="" method="Get" className={`${styles.form} ${isArabic ? styles.ar : ""} ${styles.form_signIn}`}>

                <label className={styles.label} htmlFor={"Email"}>E-mail:
                    <input type={"email"} id="Email" name="email" className={styles.input} placeholder={"Enter your Email"} />
                </label>

                <label className={styles.label} htmlFor={"Name"}>Password:
                    <input type={"password"} id="Name" name="name" className={styles.input} placeholder={"Enter your Password"} />
                </label>

                <div className={styles.btn_container}>
                    <div className={styles.signin_btns_con}>
                        <button className={styles.btn}>Log In</button>
                        <a className={styles.forget}>Forget password</a>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <p className={`${styles.forget} ${styles.account}`}>Don't have an account</p>
                        <button className={`${styles.btn} ${styles.up}`}>Sign Up here</button>
                    </div>

                    <p className={styles.h1}>Or Log In Using </p>

                    <div className={styles.signother_con}>

                        <button className={styles.btn_gf}>
                            <FcGoogle />
                            <span>With Google</span>
                        </button>

                        <button className={styles.btn_gf}>
                            <BsLinkedin className={"text-sky-600"} />
                            <span>With LinkedIn</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}