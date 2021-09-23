import { useState } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';

const useAuth = () => {
  const [username, setUsername] = useState(Cookie.get('username'));

  const redirect = (path: string) => Router.push(path);

  const logout = (path: string | null = null) => {
    setUsername(null);
    Cookie.remove('username');
    path && redirect(path);
  };

  const login = (username: string, path: string | null = null) => {
    setUsername(username);
    Cookie.set('username', username);
    path && redirect(path);
  };

  return {
    username,
    login,
    logout,
  };
};
export default useAuth;
