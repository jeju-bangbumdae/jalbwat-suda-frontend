'use client';
import styles from './page.module.css';
import { Button } from '@vapor-ui/core';
import { SomDiv } from './dummyStyle';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button>너 됨?</Button>
        <SomDiv>스타일드 컴포넌트 확인용</SomDiv>
      </main>
    </div>
  );
}