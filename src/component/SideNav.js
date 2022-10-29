/**
 * @filename: SideNav.js
 * @description: Sidenav 영역 구성
 */

/** 패키지 참조 */
import React, { memo ,useCallback } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

/** Sidenav 영역 스타일 정의 */
const SideNavContainer = styled.nav`
    display: none;
    width: 40%;
    min-width: 300px;
    position : fixed;
    top : 0;
    left : 0;
    z-index: 100;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16);
    height: 100%;
    background-color: #fff;
    a {
      font-size: 24px;
      color: #000;
      padding: 25px;
      &:hover {
        background-color: #d5d5d5;
      }
    }
`;

/**
 * SideNav 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const SideNav = memo(() => {
    const hideSideNav = useCallback( () => {
        document.querySelector('.sideNav').style.display = 'none';
    });
  return (
    <SideNavContainer className='sideNav'>
        <HashLink to='#' onClick={hideSideNav}>Close Menu</HashLink>
        <HashLink to='/#Food'>Food</HashLink>
        <HashLink to='/#About'>About</HashLink>
    </SideNavContainer>
  );
});

export default SideNav;