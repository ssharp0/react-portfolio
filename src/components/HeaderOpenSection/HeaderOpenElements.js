import styled from "styled-components";
import { GrContactInfo } from 'react-icons/gr'
import { CgHello } from 'react-icons/cg'
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
 padding: 0 30px;

 :before {
  position: absolute;
  z-index: 2;
  content: '';
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
 }
`

export const HeaderOpenContent = styled.div`
 z-index: 3;
 max-width: 1000px;
 position: absolute;
 padding: 10px 25px;
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
 max-width: 600px;
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

export const HeaderOpenBtnWrapper = styled.div`
 margin-top: 35px;
 margin-bottom: 35px;
 align-items: center
 display: flex;
 flex-direction: column;
`

export const ContactInfoIcon = styled(GrContactInfo)`
 margin-left: 5px;
 font-size: 20px;
`

export const HelloIcon = styled(CgHello)`
 margin-left: 5px;
 font-size: 20px;
`

export const GoContactButton = styled(LinkScroll)`
 background: #6F523B;
 border-radius: 10px;
 white-space: nowrap;
 cursor: pointer;
 align-items: center;
 justify-content: center;
 color: #fff;
 padding: 15px;
 box-shadow: 0 5px 5px rgba(0,0,0,0.2);

 &:hover {
  background-color: #fff;
  color: #A56336;
  transition: all 0.5s ease-in-out;
 }
`



