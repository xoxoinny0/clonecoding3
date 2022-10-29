/**
 * @filename: Footer.js
 * @description: Footer 공통 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

import img01 from '../assets/img/workshop.jpg';
import img02 from '../assets/img/gondol.jpg';

/** Footer 컴포넌트 스타일 정의 */
const FooterContainer = styled.footer`
  padding : 10px 16px;
  width: 90%;
  margin: auto;
  display: flex;
  ${mq.maxWidth('sm')`
    flex-direction: column;
  `}
  
  div {
    width: 33.3%;
    padding: 0 8px;
    box-sizing: border-box;
    ${mq.maxWidth('sm')`
      width: 100%;
    `}

    &:first-child {
      a {
        text-decoration: underline;
      }
    }

    &:nth-child(2) {
      ul {
        
        li {
          display: flex;
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          &:hover {
            background-color: #d5d5d5;
          }
          &:first-child {
            border-bottom: solid 0.7px #d5d5d5;
          }
          div {
            &:first-child {
              flex-basis: 0;
              img {
                width: 50px;
              }
            }
            &:last-child {
              width: 100%;
              span {
                display: block;
                box-sizing: border-box;
                flex: none;
                &:first-child {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }

    &:last-child {
      p {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;

        span {
          display: block;
          color: #fff;
          background-color: #616161;
          margin: 0 10px 16px 0;
          padding: 0 8px;
          box-sizing: border-box;
          font-size: 12px;

          &:first-child {
            background-color: #000;
            font-size: 15px;
          }
        }
      }
    }
  }
`;

// 이미지와 텍스트에 대한 JSON 배열
const imgList = [
  {img: img01, title:'Lorem', desc:'Sed mattis nunc'},
  {img: img02, title:'Ipsum', desc:'Praes tinci sed'}
];

// span 태그 생성을 위한 배열
const tagArr = ['Travel', 'New York', 'Dinner', 'Salmon', 'France', 'Drinks', 'Ideas', 'Flavors', 'Cuisine', 'Chicken', 'Dressing', 'Fried', 'Fish', 'Duck'];

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Footer = memo(() => {
  return (
    <FooterContainer>
      <div>
        <h3>FOOTER</h3>
        <p>
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.  
        </p>
        <p>Powered by <a>w3.css</a></p>
      </div>
      <div>
      <h3>BLOG POSTS</h3>
        <ul>
          {imgList.map(({img, title, desc},i)=> {
            return (
              <li key={i}>
                <div>
                  <img src={img} alt={title} />
                </div>
                <div>
                  <span>{title}</span>
                  <br />
                  <span>{desc}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
          <h3>POPULAR TAGS</h3>
          <p>
            {tagArr.map((v, i) => {
              return (
                <span key={i}>{v}</span>
              );
            })}
          </p>
      </div>
    </FooterContainer>
  );
});

export default Footer;