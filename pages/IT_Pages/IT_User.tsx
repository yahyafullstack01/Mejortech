import Navbar from "../../Components/IT-comp/Navbar_IT/navbar_it";
import Intro from "../../Components/IT-comp/Introduction_IT/intro_it";
import { AppContext } from "../../Mycontext/context";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import SectionContact from "../../Components/IT-comp/Form/SectionContact";
import SignUpSection from "../../Components/IT-comp/Form/SignUpSection";
import LogInSection from "../../Components/IT-comp/Form/LogInSection";


export default function IT_User() {

    const { t, i18n } = useTranslation("ITPage");
    const isArabic = i18n.language === "ar";

    //The arr information of the Navbar_it section
    const Signing: any = t('Signing', { returnObjects: true });

    //The arr information of the Intro_it section
    const Intro_info: any = t('Intro_info', { returnObjects: true });

    const [FormContainer, setFormContainer] = useState(<SectionContact />);

    const ContactIt = () => setFormContainer(<SectionContact />);;
    const LogForm = () => setFormContainer(<LogInSection />);
    const SignForm = () => setFormContainer(<SignUpSection />);


    return (
        <AppContext.Provider value={{
            t, Signing, Intro_info,
            isArabic,
            SectionContact, SignUpSection, LogInSection, FormContainer,
            LogForm, SignForm, ContactIt
        }}>
            <>
                <Navbar />
                <Intro />
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