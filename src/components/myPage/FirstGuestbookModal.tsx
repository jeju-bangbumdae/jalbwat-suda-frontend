import React, { useEffect, useState } from 'react';
import CustomDialog from '../common/Modal/CustomDialog';
import Image from 'next/image';

const FirstGuestbookModal = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('firstGuest-hasOpened')) setOpen(true);
  }, []);

  return (
    <CustomDialog
      isOpen={isOpen}
      setOpen={setOpen}
      titleDescription="프로 방문러"
      title={'뱃지를 획득했습니다!'}
      onClose={() => {
        localStorage?.setItem('firstGuest-hasOpened', 'true');
      }}
      content={
        <>
          <Image
            src="/images/badge-1.png"
            alt={'badge-01'}
            width={840}
            height={606}
            style={{
              width: '90%',
              height: 'auto',
              paddingBottom: '10px',
            }}
          />
        </>
      }
    />
  );
};

export default FirstGuestbookModal;
