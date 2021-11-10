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

export const TechnologiesColumn1 = styled.div`
 text-align: center;
 padding: 10px;
 margin-bottom: 10px;
 grid-area: column1;
`

export const TechnologiesColumn2 = styled.div`
 text-align: center;
 padding: 10px;
 margin-bottom: 10px;
 grid-area: column2;
`

export const TechnologiesTextWrapper = styled.div`
padding-top: 0;
padding-bottom: 50px;
max-width: 550px;
`
export const TechnologiesHeading = styled.h1`
 margin-bottom: 25px;
 font-size: 45px;
 line-height: 1;
 font-weight: 750;
 text-transform: uppercase;
 color: #fff;

 @media screen and (max-width: 480px) {
  font-size: 30px;
 }
`

export const TechnologiesDescription = styled.p`
 max-width: 430px;
 margin-bottom: 30px;
 font-size: 19px;
 line-height: 25px;
 color: #fff;

 @media screen and (max-width: 480px) {
  font-size: 15px;
 }
`

export const TechnologiesColummItem = styled.div`
 font-size: 25px;
 margin-bottom: 35px;
 color: #fff;
 
 @media screen and (max-width: 480px) {
 font-size: 10px;
 margin-bottom: 10px;
}
`

export const TechnologiesColumnBadge = styled.div`
 font-size: 50px;
 margin-bottom: 5px;
 color: #fff;

 &:hover {
  color: #A56336;
 }

 @media screen and (max-width: 480px) {
 font-size: 20px;
 margin-bottom: 2px;
}
`

