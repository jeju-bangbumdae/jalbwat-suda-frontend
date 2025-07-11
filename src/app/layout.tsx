import type { Metadata } from 'next';
import config from '@/lib/config';
import '../styles/font.css';
import '../styles/color.css';
import '@vapor-ui/core/styles.css';

import StyledComponentsRegistry from '@/providers/StyledComponentsRegistry';
import { GlobalStyle } from '@/styles/globalStyles';
import { LayoutContainer } from '@/components/LayoutContainer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: '잘 봤수다',
    template: '%s | 잘 봤수다',
  },
  icons: {
    icon: "/favicon.ico",
  }

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('config:', config);
  return (
    <html lang="ko">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services`}
      ></Script>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <main>
            <LayoutContainer>{children}</LayoutContainer>
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
