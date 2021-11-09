import React from 'react'

import { 
 SideNavContainer, 
 IconDiv, 
 SideNavCloseIcon, 
 SideNavWrapper, 
 SideNavMenu, 
 SideNavItem, 
 SideNavBtnWrap, 
} from './SidebarNavElements'

import { SidebarNavData } from './SidebarNavData'

const SidebarNav = ({ isSideNavOpen, toggle }) => {
 return (
  <SideNavContainer isSideNavOpen={isSideNavOpen} onClick={toggle}>
   <IconDiv onClick={toggle}>
    <SideNavCloseIcon />
   </IconDiv>
   <SideNavWrapper>

    <SideNavBtnWrap>
    </SideNavBtnWrap>
   </SideNavWrapper>
  </SideNavContainer>
 )
}

export default SidebarNav
