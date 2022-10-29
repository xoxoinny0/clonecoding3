/**
 * @filename: index.js
 * @description: 메인 페이지 구성
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import Food from './Food';
import About from './About';

// 메인페이지 영역에 대한 스타일 정의
const MainContainer = styled.section`
  padding: 8px 16px;
`;

/**
 * 메인페이지 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const Main = memo(() => {
  return (
    <MainContainer>
        <Food />
        <hr />
        <About />
        <hr />
    </MainContainer>
  );
});

export default Main;