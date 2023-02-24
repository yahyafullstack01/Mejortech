import styles from "../Form/form.module.css";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";




export default function Form() {

    const { isArabic, Form_title, Form_Labels, Form_place_holders, Form_btns } = useContext(AppContext);
    return (
        <div className={styles.container}>
            {/* The data without Sign In or Sign Up */}
            {/* <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
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
                    <button className={styles.btn_nm}>{Form_btns[3]}</button>
                </form>
            </div> */}

            {/*The data With Sign Up */}
            {/* <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.form_container} ${"flex flex-col items-center"}`}>
                <h1 className={styles.title}>Create New acount</h1>
                <form action="" method="Get" className={`${styles.form} ${isArabic ? styles.ar : ""}  ${styles.form_signUp}`}>
                    <label className={styles.label} htmlFor={"Name"}>{Form_Labels[0]}
                        <input type={"text"} id="Name" name="name" className={styles.input} placeholder={`${Form_place_holders[0]}`} />
                    </label>
                    <label className={styles.label} htmlFor={"Email"}>{Form_Labels[1]}
                        <input type={"email"} id="Email" name="email" className={styles.input} placeholder={`${Form_place_holders[1]}`} />
                    </label>
                    <label className={styles.label} htmlFor={"Password"}>Password:
                        <input type={"password"} id="Password" name="password" className={styles.input} placeholder={"enter your password"} />
                    </label>
                    <label className={`${styles.label}`} htmlFor={"Language"}>
                        <label>prefered language:</label>
                        <div className={"flex"}>
                            <input type={"checkbox"} id="English" name="English" value={"English"} className={`${styles.input} ${styles.fixlanguages}`} />
                            <label htmlFor={"English"} className={`${styles.fixlanguages}`}>English</label>
                        </div>

                        <input type={"checkbox"} id="Spanish" name="Spanish" value={"Spanish"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Spanish"} className={`${styles.fixlanguages}`}>Spanish</label>

                        <input type={"checkbox"} id="Arabic" name="Arabic" value={"Arabic"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Arabic"} className={`${styles.fixlanguages}`}>Arabic</label>

                        <input type={"checkbox"} id="Russian" name="Russian" value={"Russian"} className={`${styles.input} ${styles.fixlanguages}`} placeholder={"confirm your password"} />
                        <label htmlFor={"Russia"} className={`${styles.fixlanguages}`}>Russian</label>
                    </label>
                    <label htmlFor={"from where"} className={`${styles.label}`} >Where did you hear of us:
                        <select name="from where" className={"text-[#907730;]"} id="from where" >
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Through a friend">Through a friend</option>
                            <option value="Other">Other</option>

                        </select>
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
                    <button className={styles.btn_nm}>{Form_btns[3]}</button>
                </form>
            </div> */}

            {/* //The data With Sign In */}
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
        </div>
    )
}

