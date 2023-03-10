import { useState } from "react";
import { AppContext } from "../Mycontext/context";
import Navbar from "../Components/Home-comp/Navbar/navbar";
import Intro from "../Components/Home-comp/Introduction/intro";
import About from "../Components/Home-comp/About_us/about";
import Team from "../Components/Home-comp/Meet_team/team";
import What_we_do from  "../Components/Home-comp/What_we_do/we_do";
import Join_us from "../Components/Home-comp/Join_us/join";
import Contact_Us from "../Components/Home-comp/Contact_us/contact";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";



export default function Home() {
  const { t, i18n } = useTranslation("Home");
  const isArabic = i18n.language === "ar";
  const isRussain = i18n.language === "ru";
  const isSpanish = i18n.language === "es";


  // Card fliping in team section 
  const [side, setside] = useState(false);
  const [side2, setside2] = useState(false);
  const [side3, setside3] = useState(false);
  const [side4, setside4] = useState(false);
  const [side5, setside5] = useState(false);
  const [side6, setside6] = useState(false);

  const flip = () => setside(!side);
  const flip2 = () => setside2(!side2);
  const flip3 = () => setside3(!side3);
  const flip4 = () => setside4(!side4);
  const flip5 = () => setside5(!side5);
  const flip6 = () => setside6(!side6);


  // The arr of information About the team component 
  const Names: any = t('Team_names', { returnObjects: true });
  const Work: any = t('Work_type', { returnObjects: true });
  const Lana_info: any = t('Lana_info', { returnObjects: true });
  const Yahya_info: any = t('Yahya_info', { returnObjects: true });
  const Samuel_info: any = t('Samuel_info', { returnObjects: true });
  const Polina_info: any = t('Polina_info', { returnObjects: true });
  const Samer_info: any = t('Samer_info', { returnObjects: true });
  const Alina_info: any = t('Alina_info', { returnObjects: true });
  const Team_btn: any = t('Team_btn', { returnObjects: true });

  // The arr of informations for What-WE-do div 
  const Titles: any = t('Block_titles', { returnObjects: true });
  const Info: any = t('Block_info', { returnObjects: true });
  const Card_titles: any = t('Card_Learn_title', { returnObjects: true });
  const Card_IT: any = t('Card_IT_info', { returnObjects: true });
  const Card_ED: any = t('Card_ED_info', { returnObjects: true });
  const Card_MK: any = t('Card_MK_info', { returnObjects: true });
  const Card_btn: any = t('Who_btn', { returnObjects: true });

  //The arr of iformations for Join Us section
  const Block_Join_titles: any = t('Block_Join_titles', { returnObjects: true });
  const Block_Join_info: any = t('Block_Join_info', { returnObjects: true });

  //The arr of information inside the Contact Us section
  const CONTACT_labels: any = t('CONTACT_labels', { returnObjects: true });




  return (

    <AppContext.Provider value={{
      isRussain,/*Navbar*/
      isSpanish,/*Introduction*/
      side, side2, side3, side4, side5, side6,
      flip, flip2, flip3, flip4, flip5, flip6,
      t, isArabic, Names, Yahya_info, Work, Lana_info, Samer_info, Samuel_info, Polina_info, Alina_info, Team_btn,/* Team */
      Titles, Info, Card_titles, Card_ED, Card_IT, Card_MK, Card_btn, /* What-we-do */
      Block_Join_titles, Block_Join_info,/*Join Us */
      CONTACT_labels,/*Contact Us*/

    }}>
      <div>
        <Navbar />
        <Intro />
        <About />
        <Team />
        <What_we_do />
        <Join_us />
        <Contact_Us />
      </div>
    </AppContext.Provider>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ?? 'en';

  return {
    props: {
      ...(await serverSideTranslations(lang, ['Home'])),
    },
  };
};