import { baseInstance } from './axios';

type Props = {
  answer: string;
  content: string;
  questionId: number;
  storeId: number;
};

export const postGuestbookApi = async (requestData: Props) => {
  try {
    const response = await baseInstance.post('/api/v1/guest-books', requestData);
    const data = await response.data;
    console.log(data, 'data');
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
