import styled from "styled-components";


export const TechnologiesContainer = styled.div`
 background: #143642;
 color: #fff;

 @media screen and (max-width: 768px) {
  padding: 90px 0;
 }
`

export const TechnologiesWrapper = styled.div`
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

export const TechnologiesRow = styled.div`
 align-items: center;
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 grid-template-areas: 'column2 column1'
`



