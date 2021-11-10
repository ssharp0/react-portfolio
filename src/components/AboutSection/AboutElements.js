import styled from "styled-components";

export const AboutContainer = styled.div`
 background: #A56336;
 color: #fff;

 @media screen and (max-width: 768px) {
  padding: 90px 0;
 }
`

export const AboutWrapper = styled.div`
 height: 850px;
 width: 100%;
 max-width: 1000px;
 justify-content: center;
 display: grid;
 z-index: 1;
 margin-right: auto;
 margin-left: auto;
 padding: 25px;
`

export const AboutImgDiv = styled.div`
 text-align: center;
 max-width: 555px;
 height: 100%;
`

export const AboutImg = styled.img`
 width: 85%;
 margin-right: 1%;
 margin-left: 1%;
 margin-top: 5%;
 margin-bottom: 5%;
 border-radius: 10px;
 opacity: 75%;
`

export const AboutRow = styled.div`
 align-items: center;
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 grid-template-areas: 'column1 column2';
`

export const AboutColumn1 = styled.div`
 padding: 10px;
 margin-bottom: 10px;
 grid-area: column1;
`

export const AboutColumn2 = styled.div`
 text-align: center;
 padding: 10px;
 margin-bottom: 10px;
 grid-area: column2;
`

export const AboutTextWrapper = styled.div`
 padding-top: 0;
 padding-bottom: 50px;
 max-width: 500px;
`

export const AboutHeading = styled.h1`
 text-align: center;
 margin-bottom: 25px; 
 font-size: 45px;
 line-height: 1;
 font-weight: 750;
 text-transform: uppercase;
 color: #fff;

 @media screen and (max-width: 480px) {
  font-size: 25px;
 }
`

export const AboutDescription = styled.p`
 max-width: 430px;
 margin-bottom: 30px;
 font-size: 19px;
 line-height: 25px;
 color: #fff;

 @media screen and (max-width: 480px) {
  font-size: 15px;
 }
`

