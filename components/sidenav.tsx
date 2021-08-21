import Link from "next/link";

const Sidenav = () => {
  return (
    <section className="sidenav">
      <div className="side-wrapper">
        <p className="side-title secondary-color">MENU</p>
        <div className="side-menu">
          <Link href="/">
            <a className="secondary-color">Discover</a>
          </Link>
          <Link href="/">
            <a className="secondary-color">Latest Movies</a>
          </Link>
          <Link href="/">
            <a className="secondary-color">Categories</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
