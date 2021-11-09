import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'
import { FaWindowClose } from 'react-icons/fa'

export const SideNavContainer = styled.aside`
 background: #143642;
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.5s ease-in-out;
 opacity: ${({ isSideNavOpen }) => (isSideNavOpen ? '100%' : '0')};
 top: ${({ isSideNavOpen }) => (isSideNavOpen ? '0' : '-100%')};
`

export const IconDiv = styled.div`
 top: 1.5rem;
 right: 1.5rem;
 position: absolute;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
 
  &:hover {
  font-size: 2.5rem;
 }
`

export const SideNavCloseIcon = styled(FaWindowClose)`
 color: #fff;
`

export const SideNavWrapper = styled.div`
 color: #fff;
`

export const SideNavMenu = styled.ul`
 display: grid;
 grid-template-column: 1fr;
 grid-template-rows: repeat(4, 75px);
 text-align: center;

 @media screen and (max-width: 480px) {
  grid-template-rows: repeat(4, 55px);
 }
`

export const SideNavItem = styled(LinkScroll)`
 align-items: center;
 justify-content: center;
 display: flex;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 text-decoration: none;
 color: #fff;
 cursor: pointer;
 transition: 0.5s ease-in-out;

 &:hover {
  color: #A56336;
  font-size: 2rem;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
 }
`

export const SideNavBtnWrap = styled.div`
 display: flex;
 justify-content: center
`