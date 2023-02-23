import Navbar from "../../Components/Navbar/navbar_it";
import Intro from "../../Components/Introduction/intro_it";
import Why_Us from "../../Components/Why_us/why_us";
import Our_packages from "../../Components/our_packages/our_packages";
import Testamonials from "../../Components/Testamonials/testamonials";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { AppContext } from "../../Mycontext/context";
import { useContext } from "react";


export default function IT() {
    const { t, i18n } = useTranslation("ITPage");
    const Signing: any = t('Signing', { returnObjects: true });
    const Intro_info: any = t('Intro_info', { returnObjects: true });
    const WhyUs_list: any = t('WhyUs_list', { returnObjects: true });
    const OurPakages_types: Object = t('OurPk_block_types', { returnObjects: true });
    const OurPakages_list: any = t('OurPk_block_list', { returnObjects: true });
    const Form_title: string = t('Form_title');
    const Form_Labels: any = t('Form_Labels', { returnObjects: true });
    const Form_btns: any = t('Form_btns', { returnObjects: true });
    const Testemon_title : string = t('Testamon_title');
    const Testemoniels_names: any = t('Testa_Block_names', { returnObjects: true });
    const Testemoniels_Quotes: any = t('Testa_Block_Quotes', { returnObjects: true });
    const OurPakages_Title : string = t('OurPk_title');
    const WhyUs_title: string = t('WhyUs_title');

    return (
        <AppContext.Provider value={{
            t, Signing, Intro_info,
            WhyUs_list, OurPakages_types, 
            OurPakages_list, OurPakages_Title, 
            Form_Labels, Form_btns, Form_title,
            Testemon_title, Testemoniels_names,
            Testemoniels_Quotes,WhyUs_title
        }}>
            <div>
                <Navbar />
                <Intro />
                <Why_Us />
                <Our_packages />
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