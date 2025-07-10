import React, { useEffect, useState } from 'react';
import CustomDialog from '../common/Modal/CustomDialog';
import Image from 'next/image';
import { Text } from '@vapor-ui/core';

const ThreePointModal = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('threePoint-hasOpened')) setOpen(true);
  }, []);

  return (
    <CustomDialog
      isOpen={isOpen}
      setOpen={setOpen}
      onClose={() => {
        localStorage?.setItem('threePoint-hasOpened', 'true');
      }}
      titleDescription="가게 첫 방문!"
      title={'3점 리워드를 받았습니다.'}
      content={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '20px',
          }}
        >
          <Image
            src="/images/local-cash.png"
            alt={'badge-01'}
            width={867}
            height={405}
            style={{
              width: '90%',
              height: 'auto',
              paddingBottom: '10px',
            }}
          />
          <Text style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>
            {'*실제 제주 지역 화폐로 환전됩니다.'}
          </Text>
        </div>
      }
    />
  );
};

export default ThreePointModal;
