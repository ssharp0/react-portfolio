import styled from "styled-components";

export const ContactContainer = styled.div`
 background: #143642;
 color: #fff;

 @media screen and (max-width: 768px) {
  padding: 90px 0;
 }
`

export const ContactWrapper = styled.div`
 height: 850px;
 width: 100%;
 max-width: 1000px;
 justify-content: center;
 display: grid;
 z-index: 1;
 margin-right: auto;
 margin-left: auto;
 padding: 0 25px;
`

export const ContactImgWrap = styled.div`
 max-width: 555px;
 height: 100%;
`

export const ContactRow = styled.div`
 align-items: center;
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 grid-template-areas: 'column2 column1';
`

