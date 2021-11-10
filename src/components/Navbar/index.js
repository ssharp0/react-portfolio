import React, { useState, useEffect } from 'react'

import { IconContext } from 'react-icons/lib'

import { animateScroll as scroll } from 'react-scroll'

import { 
  NavSection, 
  NavContainer, 
  NavLabel, 
  MobileDrop, 
  NavMenu,  
  NavScrollLinks,
  SideNavOpenIcon,
} from './NavbarElements'

import { NavbarData } from './NavbarData'

const Navbar = ({ toggle }) => {
  
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const [positionScrollNav, setpositionScrollNav] = useState(false)

  const updateNavbarFormat = () => {
    if (window.scrollY >= 65) {
      setpositionScrollNav(true)
    } else {
      setpositionScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updateNavbarFormat)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavSection positionScrollNav={positionScrollNav}>
          <NavContainer>
            <NavLabel to="/" onClick={toggleHome}>My Portfolio</NavLabel>
            <MobileDrop onClick={toggle}>
              <SideNavOpenIcon/>
            </MobileDrop>
            <NavMenu>
              {NavbarData.map(navSections => (
                  <NavScrollLinks to={navSections.section} offset={-65} smooth={true} duration={1000} spy={true} exact='true'>{navSections.label}</NavScrollLinks>
              ))}
            </NavMenu>
          </NavContainer>
        </NavSection>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
