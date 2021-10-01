import { useEffect, useState, FormEvent } from 'react';
import CustomHead from '../../components/customHead';
import { login } from '../../api/auth/login';
import { User as UserType } from '../../types/user';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const { login: loginCookie } = useAuth();
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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const authData = {
        email: formData.email,
        password: formData.password,
      };
      const data: UserType = await login(authData);
      loginCookie(data.firstName, '/');
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
