import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { CgMoreVerticalR } from 'react-icons/cg'

export const NavSection = styled.nav`
 background: ${({ positionScrollNav }) => (positionScrollNav ? '#A56336' : 'transparent')};
 margin-top: -65px;
 height: 65px;
 display: flex;
 justify-content: center;
 font-size: 1.2rem;
 top: 0;
 z-index: 10;
 position: sticky;

 @media screen and (max-width: 960px) {
  transition: 0.5s all ease;
 }
`

export const MobileDrop = styled.div`
 display: none;

 @media screen and (max-width: 768px) {
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
 }
`

export const SideNavOpenIcon = styled(CgMoreVerticalR)`
 color: #fff;
`

export const NavMenu = styled.li`
 display: flex;
 margin-right: -20px;
 align-items: center;
 list-style: none;
 text-align: center;

 @media screen and (max-width: 768px) {
  display: none;
 }
`

export const NavContainer = styled.div`
 width: 100%;
 padding: 25px;
 max-width: 1000px;
 justify-content: space-between;
 display: flex;
 height: 65px;
 z-index: 1;
`

export const NavLabel = styled(LinkRouter)`
 color: #fff;
 cursor: pointer;
 text-decoration: none;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-left: 20px;
 font-weight: bold;

 &:hover {
 font-size: 2rem;
}
`

export const NavScrollLinks = styled(LinkScroll)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 1rem;
 height: 100%;
 cursor: pointer;
 
 &:hover {
  font-size: 1.5rem;
 }

 &.active {
  border-bottom: 4px solid #fff;
  color: #143642;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
 }

`
