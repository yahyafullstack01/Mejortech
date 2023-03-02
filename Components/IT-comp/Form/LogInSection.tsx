import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { useRouter } from 'next/router'
export default function LogIn() {

    const router = useRouter()
    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns,
        Signing, SignForm, SignUpwithgoogle,} = useContext(AppContext);
    return (
        <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
            <h1 className={styles.title}>{Form_title[1]}</h1>
            <form action="" method="Get" className={`${styles.form} ${isArabic ? styles.ar : ""} ${styles.form_signIn}`}>

                <label className={styles.label} htmlFor={"Email"}>{Form_Labels[1]}
                    <input type={"email"} id="Email" required name="email" className={styles.input} placeholder={Form_place_holders[1]} />
                </label>

                <label className={styles.label} htmlFor={"Name"}>{Form_Labels[2]}
                    <input type={"password"} id="Name" required name="name" className={styles.input} placeholder={Form_place_holders[2]} />
                </label>

                <div className={styles.btn_container}>
                    <div className={styles.signin_btns_con}>
                        <button className={styles.btn} type="button" onClick={() => router.push('/IT_Pages/IT_User')}>{Signing[0]}</button>
                        <a className={styles.forget} href="">{Form_Labels[3]}</a>


                        <div className={styles.desk}>
                            <br></br>
                            <br></br>
                            <hr></hr>
                            <p className={`${styles.forget} ${styles.account}`}>{Form_Labels[7]}</p>
                            <button className={`${styles.btn} ${styles.up}`} onClick={() => SignForm()}>{Form_btns[5]}</button>
                        </div>

                    </div>

                    <div className={styles.signother_con}>

                        <p className={styles.h1}>{Form_Labels[6]}</p>

                        <button className={styles.btn_gf} type="button" onClick={() => SignUpwithgoogle()}>
                            <FcGoogle />
                            <span>{Form_Labels[9]}</span>
                        </button>

                        <button className={styles.btn_gf}>
                            <BsLinkedin className={"text-sky-600"} />
                            <span>{Form_Labels[10]}</span>
                        </button>
                    </div>

                    <div className={styles.mobile}>
                        <hr></hr>
                        <p className={`${styles.forget} ${styles.account}`}>{Form_Labels[6]}</p>
                        <button className={`${styles.btn} ${styles.up}`}>{Form_btns[5]}</button>
                    </div>

                </div>
            </form>
        </div>
    )
}