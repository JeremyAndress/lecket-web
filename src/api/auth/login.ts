import { instance } from '../index';

type Credentials = {
  email: string;
  password: string;
};

export async function login(credentials: Credentials) {
  const { data, headers } = await instance.post('users/login', credentials);
  console.log(headers)
  return { data };
}
