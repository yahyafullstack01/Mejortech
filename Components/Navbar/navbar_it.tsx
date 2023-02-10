import styles from "./navbar.module.css"
import { BsGlobe } from 'react-icons/bs';
import { TbEqual } from 'react-icons/tb';
import { RxCross1 } from 'react-icons/rx';
import Link from "next/link";

export default function header() {

    return (

        <div className={`${styles.container2} ${"items-center justify-between flex"}`}>
            <Link passHref href="/">
                <img
                    src="/logo.png"
                    alt="The Logo of the company"
                    className={`${styles.logo}`}
                />
            </Link>
            <nav className={"sm:flex md:w-96 w-72 2xl:w-4/12 justify-between hidden"}>
                <a href="/#About" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>About</a>
                <a href="/#Our_work" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Our Work</a>
                <a href="/#Team" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Team</a>
                <a href="/#Contact_us" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Contact Us</a>
            </nav>
            <div className={`${styles.btn_container} ${"sm:flex hidden"}`}>
                <button className={styles.btn}>Sign In</button>
                <button className={styles.btn}>Sign Up</button>
            </div>
            <a href="#menu" className="sm:hidden flex">
                <TbEqual className="sm:hidden text-4xl text-white flex" />
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
                <div className={`${styles.menu_mobile} ${"flex w-full justify-center mt-10 items-center text-lg"}`}>
                    <div className="flex items-center">
                        <BsGlobe className="text-xl text-white " />
                        <select className={`${styles.selection} ${"bg-transparent text-white outline-none"}`}>
                            <option value="en">English</option>
                            <option value="ab">Arabic</option>
                            <option value="ru">Russian</option>
                        </select>
                    </div>

                    <div className={`${styles.btn_container} ${"flex"}`}>
                        <button className={styles.btn}>Sign In</button>
                        <button className={styles.btn}>Sign Up</button>
                    </div>
                </div>

                <div className={`${styles.nav_mobile} ${"flex flex-col gap-y-12 mt-2"}`}>
                    <a href="/#About" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>About</a>
                    <a href="/#Our_work" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>Our Work</a>
                    <a href="/#Team" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>Team</a>
                    <a href="/#Contact_us" className={`${styles.mob_hover} ${"text-2xl text-center text-white  w-full"}`}>Contact Us</a>
                </div>

            </section>
        </div>
    )
}


