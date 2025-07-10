import { baseInstance } from './axios';

type Props = {
  storeId: number;
};

export const getStoreApi = async (requestData: Props) => {
  try {
    const response = await baseInstance.get(`/api/v1/stores/${requestData.storeId}`);
    const data = await response.data;
    console.log(data, 'data');
    return data as StoreType;
  } catch (error: any) {
    console.error(error);
  }
};
