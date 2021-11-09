import styled from "styled-components";
import Card from '@mui/material/Card';

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
 border-top: solid #fff 2px;
 border-bottom: solid #fff 2px;

 @media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 1.8px;
 }
`

export const ProjectsCard = styled(Card)`
 background: #6F523B !important;
 color: #fff !important;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 max-height: 350px;
 padding: 5px;
 transition: all 0.5s ease-in-out;

 &:hover {
  background: #fff !important;
  color: #A56336 !important;
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
  box-shadow: 0 10px 10px rgba(0,0,0,0.5);
 }
`

export const ProjectsIcon = styled.img`
 height: 160px;
 width: 160px;
 margin-bottom: 10px;
 border-radius: 10px;
 border: solid #fff 0.5px;

 &:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 5px rgba(0,0,0,0.5);
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

export const ProjectsHeader = styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;
 font-weight: bold;
`

export const ProjectsDescription = styled.p`
 font-size: 1rem;
 text-align: center;
 margin-bottom: 10px;
`

export const ProjectsBtnWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
 grid-gap: 10px;
 padding: 0 50px;

 @media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: 1fr 1fr;
  padding: 0 2px;
 }
`

export const ProjectsBadgesWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 10px;
 padding: 0 50px;

 @media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 2px;
 }
`

export const ProjectsBadges = styled.div`
 height: 30px;
 width: 30px;
 margin-bottom: 10px;
`