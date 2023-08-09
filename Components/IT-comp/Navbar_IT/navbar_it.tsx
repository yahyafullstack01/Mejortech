import styles from "../../Home-comp/Navbar/navbar.module.css"
import { ImSwitch } from "react-icons/im";
import { TbEqual } from 'react-icons/tb';
import { RxCross1 } from 'react-icons/rx';
import Link from "next/link";
import { AppContext } from "../../../Mycontext/context";
import { useContext } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";


export default function header() {
    const router = useRouter();
    let UserIT_route: string = "/IT_Pages/IT_User";
    const { t } = useTranslation("Home");
    const { isRussain, Signing, LogForm, SignForm, ContactIt, Logout, } = useContext(AppContext);

    // function to change the buttons of registration between navbar Itpage and UserItpage
    function Changeregistration() {
        if (router.asPath == UserIT_route) {
            return (
                <div id="Itusernav">
                    <ImSwitch
                        className={styles.logout}
                        onClick={() => Logout()}
                    />
                </div>
            )
        }
        else {
            return (
                <>
                    <a href="#FormDiv" className={`${styles.btn} ${isRussain ? styles.ru : ""}`}>
                        <button onClick={() => { LogForm() }}>{Signing[0]}</button>
                    </a>
                    <a href="#FormDiv" className={`${styles.btn} ${isRussain ? styles.ru : ""}`}>
                        <button onClick={() => { SignForm() }}>{Signing[1]}</button>
                    </a>
                </>
            );
        }
    }

    return (
        <div className={`${styles.container2} ${"items-center justify-between flex"}`}>
            <Link passHref href="/">
                <img
                    src="/logo.png"
                    alt="The Logo of the company"
                    className={`${styles.logo}`}
                />
            </Link>
            <nav className={`${styles.nav_con} ${"sm:flex md:w-96 w-72 2xl:w-4/12 justify-between hidden"} ${isRussain ? styles.ru : ""}`}>
                <Link passHref href="/#About" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t('About')}</Link>
                <Link passHref href="/#Our_work" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("Our_Work")}</Link>
                <Link passHref href="/#Team" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("Team")}</Link>
                <Link passHref href="#FormDiv" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`} onClick={() => { ContactIt() }}>{t("Contact_Us")}</Link>
            </nav>
            <div className={`${styles.btn_container} ${"sm:flex hidden"}`} id="registration buttons">
                {Changeregistration()};
            </div>
            <a href="#menu" className="sm:hidden flex">
                <TbEqual className="sm:hidden text-4xl text-white flex" />
            </a>

            {/*For the Menu , When openning the screen below tablet mode*/}
            <section id="menu" className={styles.menu}>
                <div className={`${styles.bar} ${"flex items-center justify-between"}`}>
                    <a href="#">
                        <img
                            src="/logo.png"
                            alt="The Logo of the company"
                            className="w-32"
                        />
                    </a>
                    <a href="#">
                        <RxCross1 className="text-4xl text-white flex" />
                    </a>
                </div>
                <div className={`${styles.menu_mobile} ${"flex w-full justify-center mt-10 items-center text-lg"}`}>
                    <div className={`${styles.btn_container} ${"flex"}`}>
                        <a href="#FormDiv" className={styles.btn}>
                            <button onClick={() => { LogForm() }} >{Signing[0]}</button>
                        </a>
                        <a href="#FormDiv" className={styles.btn}>
                            <button onClick={() => { SignForm() }}>{Signing[1]}</button>
                        </a>
                    </div>
                </div>
                <div className={`${styles.nav_mobile} ${"flex flex-col gap-y-12 mt-2"}`}>
                    <a href="/#About" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>{t('About')}</a>
                    <a href="/#Our_work" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>{t("Our_Work")}</a>
                    <a href="/#Team" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>{t("Team")}</a>
                    <a href="/#Contact_us" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>{t("Contact_Us")}</a>
                </div>
            </section>
        </div>
    )
}