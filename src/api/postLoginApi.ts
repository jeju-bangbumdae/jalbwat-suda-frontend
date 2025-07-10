import { tokenInstance } from './axios';

type Props = {
  email: string;
  password: string;
};

export const loginApi = async (requestData: Props) => {
  try {
    const response = await tokenInstance.post('/api/v1/login', requestData);
    const data = await response.data;
    console.log(data, 'data');
    localStorage.setItem('token', data?.token);
    return data?.token;
  } catch (error: any) {
    console.error(error);
  }
};
