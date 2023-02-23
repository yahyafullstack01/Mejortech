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

function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#menu') {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    });

    if (i18n.language === 'ar') {
      document.documentElement.classList.add('ar');
    } else {
      document.documentElement.classList.remove('ar');
    }

    if (i18n.language === 'ru') {
      document.documentElement.classList.add('ru');
    } else {
      document.documentElement.classList.remove('ru');
    }

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
