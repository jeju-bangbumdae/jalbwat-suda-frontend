'use client';
import { Button, Text } from '@vapor-ui/core';

export default function Home() {
  return (
    <main>
      <Button>너 됨?</Button>
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
        <p style={{color: "var(--color-primary-orange)"}}>테스트 문구! - 일반 텍스트</p>
        <Text style={{color: "var(--color-primary-orange)"}}>테스트 문구! - vapor 텍스트</Text>
      </ol>
    </main>
  );
}