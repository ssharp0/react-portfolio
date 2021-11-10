import React from 'react'

import { 
 SideNavContainer, 
 SideNavHeaderPaper,
 SideNavHeader,
 IconDiv, 
 SideNavCloseIcon, 
 SideNavMenu, 
 SideNavItem, 
} from './SidebarNavElements'

import { SidebarNavData } from './SidebarNavData'

const SidebarNav = ({ isSideNavOpen, toggle }) => {
 return (
  <SideNavContainer isSideNavOpen={isSideNavOpen} onClick={toggle}>
   <IconDiv onClick={toggle}>
    <SideNavCloseIcon />
   </IconDiv>
    <SideNavMenu>
     <SideNavHeaderPaper elevation={10}>
      <SideNavHeader>
       Portfolio Site
      </SideNavHeader>
     </SideNavHeaderPaper>
     {SidebarNavData.map(sectionNav => (
      <SideNavItem to={sectionNav.section} onClick={toggle}>{sectionNav.label}</SideNavItem>
     ))}
    </SideNavMenu>
  </SideNavContainer>
 )
}

export default SidebarNav
