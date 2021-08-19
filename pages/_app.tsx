/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Sidenav from "../components/sidenav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="main-content">
        <Sidenav />
        <section className="main-section">
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}

export default MyApp;
