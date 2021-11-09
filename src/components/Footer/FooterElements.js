import styled from "styled-components";

export const FooterContainer = styled.footer`
   background: linear-gradient(180deg, #143642 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, #A56336 0%, transparent 100%);
`

export const FooterWrap = styled.div`
 height: 400px;
 max-width: 1000px;
 margin: 0 auto;
 padding: 45px 25px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;

 @media screen and (max-width: 820px) {
  padding-top: 30px;
 }
`

export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 margin: 15px;
 align-items: center;
 width: 150px;
 box-sizing: border-box;
 color: #fff;

 @media screen and (max-width: 420px) {
  width: 100%;
  margin: 0;
  padding: 10px;
}
`

export const FooterLinkHeading = styled.h1`
 font-size: 15px;
 margin-bottom: 10px;
 cursor: pointer;
 color: #A56336;

 &:hover {
   font-size: 1.1rem;
   color: #fff;
 }
`

export const FooterSiteDetails = styled.h5`
 color: #fff;
 margin-bottom: 10px;
`