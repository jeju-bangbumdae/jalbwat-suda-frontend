type StoreType = {
  id: number;
  name: string;
  address: string;
  category: string;
  user?: {
    id: number;
    name: string;
    actor: string;
  };
  operationTime: string;
  lat: string; //위도
  lon: string; //경도
  phone: string;
  guestBookCount: number;
};
type MapOptionsType = {
  center: number[];
  level: number;
};
type LatLonType = {
  lat: string;
  lon: string;
};

type GuestBookType = {
  id: number;
  storeId: number;
  storeName: string;
  storeAddress: string;
  storeCategory: string;
  qna?: {
    question: string;
    answer: string;
  };
  content: string;
  user: {
    id?: number;
    actor?: string;
    name: string;
  };
};
