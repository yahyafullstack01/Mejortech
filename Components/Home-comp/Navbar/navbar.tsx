import { TbEqual } from 'react-icons/tb';
import { RxCross1 } from 'react-icons/rx';
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css"
import { BsGlobe } from 'react-icons/bs';
import { AppContext } from '../../../Mycontext/context';
import { useContext } from 'react';

function Header() {
    const router = useRouter();
    const { t, isRussain } = useContext(AppContext);

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value; 

        router.push(router.pathname, router.asPath, { locale: lang });
    };

    return (
        <div className={`${styles.container} ${"items-center justify-between flex"}`}>
            <Link passHref href="/">
                <img
                    src="/logo.png"
                    alt="The Logo of the company"
                    className={`${styles.logo}`}
                />
            </Link>

            <nav className={`${styles.Nav_con} ${"sm:flex md:w-96 w-72 2xl:w-4/12 justify-between hidden"} ${isRussain ? styles.ru : ""}`} >
                <a href="#About" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("About")}</a>
                <a href="#Our_services" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("Our_Work")}</a>
                <a href="#Team" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("Team")}</a>
                <a href="#Contact_us" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>{t("Contact_Us")}</a>
            </nav>

            <div className="sm:flex items-center md:text-lg hidden">
                <BsGlobe className={`${"text-xl text-white"} ${styles.globe} `} />
                <select
                    className={`${styles.selection} ${"bg-transparent text-white outline-none"}`}
                    defaultValue={router.locale}
                    onChange={handleChangeLanguage}
                >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
            
            <a href="#menu" className="sm:hidden flex">
                <TbEqual className={`${"sm:hidden text-4xl text-white flex"}`} />
            </a>
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

                <div className={`${styles.nav_mobile} ${"flex items-center justify-center flex-col gap-y-12 mt-2"}`}>
                    <a href="#About" className="text-2xl text-center text-white  w-full">{t("About")}</a>
                    <a href="#Our_services" className="text-2xl text-center text-white  w-full">{t("Our_Work")}</a>
                    <a href="#Team" className="text-2xl text-center text-white  w-full">{t("Team")}</a>
                    <a href="#Contact_us" className="text-2xl text-center text-white  w-full">{t("Contact_Us")}</a>
                </div>
                <div className="flex w-full justify-center mt-10 items-center text-lg  ">
                    <BsGlobe className="text-xl text-white " />
                    <select
                        className={`${styles.selection} ${"bg-transparent text-white outline-none"}`}
                        defaultValue={router.locale}
                        onChange={handleChangeLanguage}
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
            </section>
        </div>
    );
}

export default Header;






