import Image from 'next/image';
import Link from 'next/link';
import lemon from '../public/lemon.svg';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { username, logout } = useAuth();

  return (
    <header className="header-content">
      <div className="header-row">
        <div className="header-title">
          <Link href="/">
            <h1 className="primary-color k">Lecket</h1>
          </Link>
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
            {username ? username : 'Menu'}
            <ul>
              <Link href="/login">
                <a className="secondary-color">Login</a>
              </Link>
              <Link href="/login">
                <a className="secondary-color">Register</a>
              </Link>
              <a
                className="secondary-color"
                href="https://github.com/Lemon-Rocket"
              >
                Community
              </a>
              <a className="secondary-color" onClick={() => logout()}>
                Logout
              </a>
            </ul>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
