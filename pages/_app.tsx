import '../styles/globals.css'
import Head from "../Html/html";
import type { AppProps } from 'next/app'
import Foot from "../Components/Footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Foot />
    </>
  )

}
