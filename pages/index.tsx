import { useState } from "react";
import { AppContext } from "../Mycontext/context";
import Navbar from "../Components/Navbar/navbar";
import Intro from "../Components/Introduction/intro";
import About from "../Components/About_us/about";
import Team from "../Components/Meet_team/team";
import What_we_do from "../Components/What_we_do/we_do";
import Join_us from "../Components/Join_us/join";
import Contact_Us from "../Components/Contact_us/contact";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";


export default function Home() {


const {t} = useTranslation("Home"); 

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


  // The arr of information About the tream s





  return (

    <AppContext.Provider value={{ side, side2, side3, side4, side5, side6, flip, flip2, flip3, flip4, flip5, flip6 }}>
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
      // locale, 
    },
  };
};