import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

interface UseDateBoundModalProps {
  cookieKey: string;
  startTime: string;
  closeTime: string;
  cookieDay: number;
}

const useDateBoundModal = ({
  cookieKey,
  startTime,
  closeTime,
  cookieDay,
}: UseDateBoundModalProps) => {
  const [cookies, setCookie] = useCookies([cookieKey]);
  const [open, setOpen] = useState(true);

  const dayFlag = useMemo(() => {
    const today = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const openDay = dayjs(startTime).format('YYYY-MM-DD HH:mm:ss');
    const closeDay = dayjs(closeTime).format('YYYY-MM-DD HH:mm:ss');
    return today >= openDay && today <= closeDay;
  }, []);

  const [isModalShow, setIsModalShow] = useState(!cookies[cookieKey] && dayFlag);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleClickNeverOpen = () => {
    const expirationDate = dayjs().add(cookieDay, 'day').toDate();
    setCookie(cookieKey, 'true', {
      path: '/',
      expires: expirationDate,
    });
  };

  const handleClickCloseFor3Days = () => {
    const expirationDate = dayjs().add(3, 'day').toDate();
    setCookie(cookieKey, 'true', {
      path: '/',
      expires: expirationDate, // 3일 후 자동 삭제
    });
  };

  useEffect(() => {
    setIsModalShow(!cookies[cookieKey] && dayFlag);
  }, [cookies]);

  return {
    isModalShow,
    open,
    handleModalClose,
    handleClickNeverOpen,
    handleClickCloseFor3Days,
  };
};

export default useDateBoundModal;
