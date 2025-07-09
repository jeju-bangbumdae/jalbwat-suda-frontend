'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: sans-serif;
    background-color: #f8f8f8;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }

::-webkit-scrollbar {
  display: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
`;
