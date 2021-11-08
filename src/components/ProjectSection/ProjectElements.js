import styled from "styled-components";

export const ProjectsContainer = styled.div`
 background: #A56336;
 height: 850px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
 @media screen and (max-width: 768px) {
  height: 1200px;
 }

 @media screen and (max-width: 480px) {
  height: 1500px;
 }
`

export const ProjectsWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 15px;
 padding: 50px;

 @media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 1.8px;
 }
`



export const ProjectsHeading = styled.h1`
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

