'use client';
import { IconButton } from '@vapor-ui/core';
import ChevronIcon from '../icons/ChevronIcon';
import { useRouter } from 'next/navigation';

const BackButton = ({}) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };
  return (
    <IconButton aria-label="뒤로" variant="ghost" onClick={handleOnClick}>
      <ChevronIcon />
    </IconButton>
  );
};

export default BackButton;
