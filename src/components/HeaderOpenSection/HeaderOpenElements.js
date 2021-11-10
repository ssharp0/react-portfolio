import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'

export const HeaderOpenBg = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 overflow: hidden;
`

export const HeaderOpenContainer = styled.div`
 height: 800px;
 background: #143642;
 display: flex;
 justify-content: center;
 position: relative;
 z-index: 1;
 align-items: center;

 :before {
  position: absolute;
  z-index: 2;
 }
`

export const HeaderOpenContent = styled.div`
 z-index: 3;
 max-width: 1000px;
 position: absolute;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const HeaderOpenHeading = styled.h1`
 font-size: 50px;
 text-align: center;
 color: #fff;

 @media screen and (max-width: 768px) {
  font-size: 40px;
 }

 @media screen and (max-width: 480px) {
  font-size: 30px
 }
`

export const HeaderOpenSubHeading = styled.p`
 max-width: 550px;
 margin-top: 25px;
 font-size: 25px;
 text-align: center;
 color: #fff;

 @media screen and (max-width: 768px) {
  font-size: 20px;
 }

 @media screen and (max-width: 480px) {
  font-size: 15px
 }
`



