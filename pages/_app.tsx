import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "../Html/html";
import type { AppProps } from "next/app";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from "next";
import Foot from "../Components/Footer/footer";
import { appWithTranslation, useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import {app} from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";

import { AppContext } from "../Mycontext/context";
import { useContext } from "react";

function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  
  const { i18n } = useTranslation();



    const { t, } = useTranslation("ITPage");
    const isArabic = i18n.language === "ar";
    const auth = getAuth(app);

    //The arr information of the Navbar_it section
    const Signing: any = t('Signing', { returnObjects: true });

    //The arr information of the Intro_it section
    const Intro_info: any = t('Intro_info', { returnObjects: true });
  useEffect(() => {

    //for animation
    AOS.init({ duration: 1000, once: false });
    
    //for menu scroll in mobile version
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#menu') {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    });

    //detecte current language arabic
    if (i18n.language === 'ar') {
      document.documentElement.classList.add('ar');
    } else {
      document.documentElement.classList.remove('ar');
    }
    //detecte current language russian
    if (i18n.language === 'ru') {
      document.documentElement.classList.add('ru');
    } else {
      document.documentElement.classList.remove('ru');
    }
    //detecte current language spanish
    if (i18n.language === 'es') {
      document.documentElement.classList.add('es');
    } else {
      document.documentElement.classList.remove('es');
    }

  }, [i18n.language]);


  return (
    <AppContext.Provider value={{}}>
          <>
      <Head />
      <Component {...pageProps} />
      <Foot/>
    </>
    </AppContext.Provider>

  );
}

export default appWithTranslation(App);
