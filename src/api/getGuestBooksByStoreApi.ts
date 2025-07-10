import { baseInstance } from './axios';

type Props = {
  storeId: number;
};

export const getGuestBooksByStoreApi = async (requestData: Props) => {
  try {
    const response = await baseInstance.get(`/api/v1/guest-books/by-store/${requestData.storeId}`);
    const data = await response.data;
    console.log(data, 'data');
    return (data || []) as GuestBookType[];
  } catch (error: any) {
    console.error(error);
  }
};
