import "@/styles/globals.css";
import "../public/styles.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>WebCraft</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
