import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'
import { FaWindowClose } from 'react-icons/fa'
import { Paper } from '@mui/material'

export const SideNavHeaderPaper = styled(Paper)`
 margin-left: 20%;
 margin-right: 20%;
 align-self: center;
 cursor: default;
`

export const SideNavHeader = styled.h1`
 color: #A56336;
 font-size: 2.5rem;

 @media screen and (max-width: 480px) {
  font-size: 1.5rem;
 }
`

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
 font-size: 2rem;
 cursor: pointer;
 
  &:hover {
  font-size: 2.5rem;
  color: #A56336;
 }
`

export const SideNavCloseIcon = styled(FaWindowClose)`
 color: #fff;

  &:hover {
  color: #A56336;
 }
`

export const SideNavMenu = styled.li`
 display: grid;
 grid-template-column: 1fr;
 grid-template-rows: repeat(5, 75px);
 text-align: center;

 @media screen and (max-width: 480px) {
  grid-template-rows: repeat(5, 55px);
 }
`

export const SideNavItem = styled(LinkScroll)`
 align-items: center;
 justify-content: center;
 display: flex;
 font-size: 1.5rem;
 color: #fff;
 cursor: pointer;
 transition: 0.5s ease-in-out;

 &:hover {
  color: #A56336;
  font-size: 2rem;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid #fff;
  margin-left: 20%;
  margin-right: 20%;
 }
`