import Image from 'next/image';
import lemon from '../public/lemon.svg';

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
          Menu
          <ul>
            <a className="secondary-color" href="#">
              Login
            </a>
            <a className="secondary-color" href="#">
              Register
            </a>
            <a className="secondary-color" href="#">
              Community
            </a>
            <a className="secondary-color" href="#">
              Help
            </a>
          </ul>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
