import { tokenInstance } from './axios';

type Props = {
  question: string;
  content: string;
  questionId: number;
};

export const postGuestbookApi = async (requestData: Props) => {
  try {
    const response = await tokenInstance.post('/api/v1/guestbook', requestData);
    const data = await response.data;
    console.log(data, 'data');
    localStorage.setItem('token', data?.token);
    return data?.token;
  } catch (error: any) {
    console.error(error);
  }
};
