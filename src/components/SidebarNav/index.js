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
    <SideNavMenu>
     {SidebarNavData.map(sectionNav => (
      <SideNavItem to={sectionNav.section} onClick={toggle}>{sectionNav.label}</SideNavItem>
     ))}
    </SideNavMenu>
    <SideNavBtnWrap>
    </SideNavBtnWrap>
   </SideNavWrapper>
  </SideNavContainer>
 )
}

export default SidebarNav
