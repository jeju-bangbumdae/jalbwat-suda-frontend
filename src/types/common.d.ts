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

type GuestBookType = {
  id: number;
  storeId: number;
  name: string;
  address: string;
  category: string;
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
