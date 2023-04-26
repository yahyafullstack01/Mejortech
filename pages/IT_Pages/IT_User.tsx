import Navbar from "../../Components/IT-comp/Navbar_IT/navbar_it";
import Intro from "../../Components/IT-comp/Introduction_IT/intro_it";
import UserNavbar from "../../Components/IT-User/UserNavbar/UserNavbar";
import { AppContext } from "../../Mycontext/context";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { useAuth } from "../../Use_Auth/ITauth";




export default function IT_User() {

    const auth = useAuth();

    // The Firebase Logout Function
    const Logout = auth.Logout;

    const router = useRouter();
    const { t, i18n } = useTranslation("ITPage");
    const isArabic = i18n.language === "ar";

    //The arr information of the Navbar_it section
    const Signing: any = t('Signing', { returnObjects: true });

    //The arr information of the Intro_it section
    const Intro_info: any = t('Intro_info', { returnObjects: true });


    useEffect(() => {
        let token = sessionStorage.getItem('Token');
        if (!token) {
            router.push('/IT_Pages/IT');
        }
    }, [])


    return (
        <AppContext.Provider value={{
            t, Signing, Intro_info,
            isArabic, Logout
        }}>
            <>
                <Navbar />
                <Intro />
                <UserNavbar />
            </>
        </AppContext.Provider>

    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const lang = locale ?? 'en';

    return {
        props: {
            ...(await serverSideTranslations(lang, ['ITPage', 'Home'])),
        },
    };
};