import Image from "next/image";
import lemon from "../public/lemon.svg";

const Header = () => (
  <header className="header-content">
    <div className="header-row">
      <div className="header-title">
        <h1 className="primary-color k">Lecket</h1>
        <Image src={lemon} width="30" height="30" alt="Lecket Icon" />
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
        <button
          type="button"
          className="button primary-color background-card-color"
        >
          Login <i className="arrow down primary-color" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
