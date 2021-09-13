import { useEffect, useState } from 'react';
import Router from 'next/router';
import CustomHead from '../../components/customHead';
import { login } from '../../api/auth/login';

const Index = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: 0,
  });

  const handleChange = (event: { target: HTMLInputElement }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const authData = {
        email: formData.email,
        password: formData.password,
      };
      const data = await login(authData);
      console.log(data);
      Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.querySelector('body')?.classList.add('login-body');
    return () => document.querySelector('body')?.classList.remove('login-body');
  }, []);
  return (
    <>
      <CustomHead title="Login - Lecket" />
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <h3 className="primary-color">ACCOUNT LOGIN</h3>
          <div className="form-group">
            <label className="primary-color">Username</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={formData.email}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="primary-color">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formData.password}
              required
            />
          </div>
          <br />
          <div className="form-group-remember">
            <input
              onChange={handleChange}
              name="remember"
              value={formData.remember}
              type="checkbox"
            />
            <label className="primary-color">Remember Me</label>
          </div>
          <button type="submit">Log In</button>
          <div className="form-extra">
            <p className="primary-color">
              Need an account? <a href="">Register</a>
            </p>
            <a href="">Forgot password?</a>
          </div>
        </form>
      </div>
    </>
  );
};
export default Index;
