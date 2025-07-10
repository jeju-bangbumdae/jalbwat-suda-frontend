import { tokenInstance } from './axios';

export const getRecentGuestbookApi = async () => {
  try {
    const response = await tokenInstance.get('/api/v1/guest-books');
    const data = await response.data;
    console.log(data, 'data');
    return data as GuestBookType[];
  } catch (error: any) {
    console.error(error);
  }
};
