import Navbar from "../../Components/IT-comp/Navbar_IT/navbar_it";
import Intro from "../../Components/IT-comp/Introduction_IT/intro_it";
import Why_Us from "../../Components/IT-comp/Why_us/why_us";
import Our_packages from "../../Components/IT-comp/our_packages/our_packages";
import Form from "../../Components/IT-comp/Form/form";
import Testamonials from "../../Components/IT-comp/Testamonials/testamonials";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { AppContext } from "../../Mycontext/context";
import SectionContact from "../../Components/IT-comp/Form/SectionContact";
import SignUpSection from "../../Components/IT-comp/Form/SignUpSection";
import LogInSection from "../../Components/IT-comp/Form/LogInSection";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { useAuth } from "../../Use_Auth/ITauth";

export default function IT() {

    const router = useRouter();
    const auth = useAuth();

    // The Firebase Authentication and Data implementation
    const SignUpwithgoogle = auth.SignUpwithgoogle;
    const signUp = auth.signUp;
    const valueEmail = auth.valueEmail;
    const valuePassword = auth.valuePassword;
    const valueSource = auth.valueSource;
    const valueUserName = auth.valueUserName;
    const valueUserLanguage = auth.valueUserLanguage;
    const valueUserPackage = auth.valueUserPackage;
    const email = auth.email;
    const password = auth.password;
    const UserLanguage = auth.UserLanguage;
    const UserName = auth.UserName;
    const UserPackage = auth.UserPackage;
    const Source = auth.Source;


    const { t, i18n } = useTranslation("ITPage");
    const isArabic = i18n.language === "ar";
    const isRussain = i18n.language === "ru";


    //The arr information of the Navbar_it section
    const Signing: any = t('Signing', { returnObjects: true });

    //The arr information of the Intro_it section
    const Intro_info: any = t('Intro_info', { returnObjects: true });

    //The arr information of the Why_Us section
    const WhyUs_title: string = t('WhyUs_title');
    const WhyUs_list: any = t('WhyUs_list', { returnObjects: true });

    //The arr information of the Our_Packages section
    const OurPakages_Title: string = t('OurPk_title');
    const OurPakages_types: any = t('OurPk_block_types', { returnObjects: true });
    const OurPakages_list: any = t('OurPk_block_list', { returnObjects: true });

    //The arr information of the Form section
    const Form_title: any = t('Form_title', { returnObjects: true });
    const Form_Labels: any = t('Form_Labels', { returnObjects: true });
    const Form_place_holders: any = t('Form_place_holders', { returnObjects: true });
    const Form_btns: any = t('Form_btns', { returnObjects: true });


    //The arr information of the Testamonials section
    const Testemon_title: string = t('Testamon_title');
    const Testemoniels_names: any = t('Testa_Block_names', { returnObjects: true });
    const Testemoniels_Quotes: any = t('Testa_Block_Quotes', { returnObjects: true });

    //changing contactdiv inItpage to registration or Login 
    const [FormContainer, setFormContainer] = useState(<SectionContact />);
    const ContactIt = () => setFormContainer(<SectionContact />);;
    const LogForm = () => setFormContainer(<LogInSection />);
    const SignForm = () => setFormContainer(<SignUpSection />);


    //useEffect for detecting if the user is already authenticated
    useEffect(() => {
        let token = sessionStorage.getItem('Token');
        if (token) {
            router.push('/IT_Pages/IT_User');
        }
    }, [])

    return (
        <AppContext.Provider value={{
            t, Signing, Intro_info,
            WhyUs_list, isArabic, isRussain, OurPakages_types,
            OurPakages_list, OurPakages_Title,
            Form_Labels, Form_place_holders, Form_btns, Form_title,
            Testemon_title, Testemoniels_names,
            Testemoniels_Quotes, WhyUs_title,
            SectionContact, SignUpSection, LogInSection,
            FormContainer, LogForm, SignForm, ContactIt,
            SignUpwithgoogle,
            signUp, valueEmail, valuePassword, valueSource,
            valueUserName, valueUserLanguage, valueUserPackage, email, password,
            UserLanguage, UserName, UserPackage, Source,
        }}>
            <div>
                <Navbar />
                <Intro />
                <Why_Us />
                <Our_packages />
                <Form />
                <Testamonials />
            </div>
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