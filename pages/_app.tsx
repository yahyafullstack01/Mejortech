import '../styles/globals.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Head from "../Html/html";
import type { AppProps } from 'next/app'
import Foot from "../Components/Footer/footer";
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#menu') {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    });

  }, [])

  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Foot />
    </>
  )

}

export default appWithTranslation(App)