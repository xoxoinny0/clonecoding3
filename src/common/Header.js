/**
 * @filename: Header.js
 * @description: Header 공통 컴포넌트
 */

/** 패키지 참조 */
import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SideNav from '../component/SideNav';

/** Header 컴포넌트 스타일 정의 */
const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 10px 16px;
   box-sizing: border-box;
   width: 100%;
   position: fixed;
   z-index: 9999;
   background-color: #fff;
   font-size: 24px;

   a {
    color: #000;
    display: block;
    padding: 8px 16px;
    box-sizing: border-box;
    &:hover {
      background-color: #d5d5d5;
    }
   }
`;

const Header = memo(() => {


  const showSideMenu = useCallback(() => {
    document.querySelector('.sideNav').style.display = 'block';
  });

  return (
    <HeaderContainer>
        <HashLink to='#' onClick={showSideMenu}><i class="fa-sharp fa-solid fa-bars" /></HashLink>
          {/* <HashLink to='#'>Close Menu</HashLink>
          <HashLink to='/#Food'>Food</HashLink>
          <HashLink to='/#About'>About</HashLink> */}
        <SideNav />
        <div>My Food</div>
        <div>Mail</div>
    </HeaderContainer>
  );
});

export default Header;