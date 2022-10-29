/**
 * @filename: Food.js
 * @description: Food 영역 구성
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import { HashLink } from 'react-router-hash-link';

import img01 from '../../assets/img/img01.jpg'
import img02 from '../../assets/img/img02.jpg'
import img03 from '../../assets/img/img03.jpg'
import img04 from '../../assets/img/img04.jpg'
import img05 from '../../assets/img/img05.jpg'
import img06 from '../../assets/img/img06.jpg'
import img08 from '../../assets/img/img08.jpg'


/** 메인 Project 영역 스타일 정의 */
const FoodContainer = styled.div`
    padding : 70px 16px;
    width: 90%;
    margin: auto;
    ul {
        display: flex;

        ${mq.maxWidth('sm')`
            flex-wrap: wrap;
        `}
        li {
            width: 25%;
            margin: 0 10px 10px 0;
            text-align: center;

            ${mq.maxWidth('sm')`
                width: 100%;
            `}

           

            img {
                width: 100%;
                height: 400px;
                object-fit: cover;
            }
        }
    }

    div {
        /* text-align: center; */
        display: flex;
        justify-content: center;
        a {
            display: block;
            padding: 8px 16px;
            box-sizing: border-box;
            color: #000;
            &:hover {
                color: #fff;
                background-color: #000;
            }
            &:nth-child(2) {
                color: #fff;
                background-color: #000;
                &:hover {
                    color: #000;
                    background-color: #d5d5d5;
                }
            }
        }
    }

`;
// 이미지와 텍스트에 대한 JSON 배열
const imgList = [
    {img: img01, title:'The Perfect Sandwich, A Real NYC Classic', desc:'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: img02, title:'Let Me Tell You About This Steak', desc:'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: img03, title:'Cherries, interrupted', desc:'Lorem ipsum text praesent tincidunt ipsum lipsum.', plus:'What else?'},
    {img: img04, title:'Once Again, Robust Wine and Vegetable Pasta', desc:'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
];

const imgList2 = [
    {img: img05, title:'All I Need Is a Popsicle', desc:'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: img06, title:'Salmon For Your Skin', desc:'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: img01, title:'The Perfect Sandwich, A Real Classic', desc:'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: img08, title:'Le French', desc:'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
];


/**
 * Food 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Food = memo(() => {
  return (
    <FoodContainer>
        <ul>
            {imgList.map(({img, title, desc, plus}, i) => {
                return (
                    <li key={i}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <p>{plus}</p>
                    </li>
                )
            })}
        </ul>
        <ul>
            {imgList2.map(({img, title, desc}, i) => {
                return (
                    <li key={i}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </li>
                )
            })}
        </ul>
        <div>
            <HashLink to="#"><i class="fa-solid fa-angles-left" /></HashLink>
            <HashLink to='#'>1</HashLink>
            <HashLink to='#'>2</HashLink>
            <HashLink to='#'>3</HashLink>
            <HashLink to='#'>4</HashLink>
            <HashLink to="#"><i class="fa-solid fa-angles-right" /></HashLink>
        </div>
    </FoodContainer>
  )
});

export default Food;