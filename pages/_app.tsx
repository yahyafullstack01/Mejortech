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
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  
  const { i18n } = useTranslation();

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
    <>
      <Head />
      <Component {...pageProps} />
      <Foot/>
    </>
  );
}

export default appWithTranslation(App);
