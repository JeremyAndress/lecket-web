import Link from 'next/link';
import useAuth from '../hooks/useAuth';

const UserButton = () => {
  const { username, logout } = useAuth();
  return (
    <button
      type="button"
      className="button primary-color background-card-color"
    >
      {username || 'Menu'}
      <ul>
        {!username && (
          <>
            <Link href="/login">
              <a className="secondary-color">Login</a>
            </Link>
            <Link href="/login">
              <a className="secondary-color">Register</a>
            </Link>
          </>
        )}

        <a className="secondary-color" href="https://github.com/Lemon-Rocket">
          Community
        </a>
        {username && (
          <a className="secondary-color" onClick={() => logout()}>
            Logout
          </a>
        )}
      </ul>
    </button>
  );
};
export default UserButton;
