/**
 * @filename: About.js
 * @description: About 영역 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import img from '../../assets/img/chef.jpg'


/** 메인 About 영역 스타일 정의 */
const AboutContainer = styled.div`
  padding: 10px 16px;
  width: 90%;
  margin: auto;
  text-align: center;
  box-sizing: border-box;

  img {
      width: 90%;
      object-fit: cover;
    }

  div {
    padding: 32px 0 50px 0;
    box-sizing: border-box;
  }
`;

/**
 * About 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const About = memo(() => {
  return (
    <AboutContainer>
      <h3>About Me, The Food Man</h3>
      <br/>
      <img src={img} alt="Me" />
      <div>
        <h4><b>I am Who I Am!</b></h4>
        <h6><i>With Passion For Real, Good Food</i></h6>
        <p>
          Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
        </p>
      </div>
    </AboutContainer>
  )
});

export default About;