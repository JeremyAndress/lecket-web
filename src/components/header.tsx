import Image from 'next/image';
import Link from 'next/link';
import lemon from '../public/lemon.svg';
import UserButton from './userButton';
import SearchInput from './searchInput';

const Header = () => (
  <header className="header-content">
    <div className="header-row">
      <div className="header-title">
        <Link href="/">
          <h1 className="primary-color k">Lecket</h1>
        </Link>
        <Image src={lemon} width="30" height="30" alt="Lecket Icon" />
      </div>
      <SearchInput />
      <div className="header-auth">
        <UserButton />
      </div>
    </div>
  </header>
);

export default Header;
