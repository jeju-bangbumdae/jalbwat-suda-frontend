import { baseInstance } from './axios';

type Props = {
  lat: string;
  lon: string;
  category: string;
};

export const getStoreListApi = async (requestData: Props) => {
  try {
    const response = await baseInstance.get(
      `/api/v1/stores?lat=${requestData?.lat}&lon=${requestData?.lon}${
        requestData?.category ? `&category=${requestData?.category}` : ''
      }`
    );
    const data = await response.data;
    console.log(data, 'data');
    return data as StoreType[];
  } catch (error: any) {
    console.error(error);
  }
};
