import CustomLink from "./customLink";

const Sidenav = () => (
  <section className="sidenav">
    <div className="side-wrapper">
      <p className="side-title secondary-color">MENU</p>
      <div className="side-menu">
        <CustomLink text="Discover" href="/" />
        <CustomLink text="Most Popular" href="/" />
        <CustomLink text="Recently Added" href="/recently-added" />
        <CustomLink text="All Genres" href="/" />
      </div>
    </div>
  </section>
);

export default Sidenav;
