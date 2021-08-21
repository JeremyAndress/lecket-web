import Link from "next/link";
import CustomLink from "./customLink";
const Sidenav = () => {
  return (
    <section className="sidenav">
      <div className="side-wrapper">
        <p className="side-title secondary-color">MENU</p>
        <div className="side-menu">
          <CustomLink text="Discover" href="/" />
          <CustomLink text="Latest Movies" href="/movies" />
          <CustomLink text="Categories" href="/" />
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
