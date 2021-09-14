/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import '../styles/embla.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import Header from '../components/header';
import Sidenav from '../components/sidenav';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === '/login') return <Component {...pageProps} />;

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
