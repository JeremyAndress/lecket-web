/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="header-content">
        <div className="header-row">
          <div className="header-title">
            <h1 className="primary-color">Lecket</h1>
          </div>
          <div className="header-input">
            <input
              className="secondary-color header-search"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="header-auth">
            <button type="button" className="button primary-color background-card-color">
              Login <i className="arrow down primary-color"/>
            </button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="sidenav">
          <p className="secondary-color">MENU</p>
          <p className="secondary-color">Discover</p>
        </section>
        <section className="main-section">
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}
export default MyApp;
