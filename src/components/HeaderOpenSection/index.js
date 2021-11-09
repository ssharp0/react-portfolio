import React, { useState } from 'react'
import Typed from 'react-typed'

import {
 HeaderOpenContainer,
 HeaderOpenBg,
 HeaderOpenContent,
 HeaderOpenHeading,
 HeaderOpenSubHeading,
 HeaderOpenBtnWrapper,
 ContactInfoIcon,
 HelloIcon,
 GoContactButton
} from './HeaderOpenElements'

import ParticlesBackGround from '../Particles'

const HeaderOpenSection = () => {

 const [hover, setHover] = useState(false)

 const onHover = () => {
  setHover(!hover)
 }

 return (
  <HeaderOpenContainer>
   <HeaderOpenBg>
    <ParticlesBackGround />
   </HeaderOpenBg>
   <HeaderOpenContent>
    <HeaderOpenHeading>
     <Typed strings={["Hello, I'm Scott."]} typeSpeed={75} />
    </HeaderOpenHeading>
    <HeaderOpenBtnWrapper>
     <GoContactButton to="contact" smooth={true} duration={500} spy={true} exact="true" onMouseEnter={onHover} onMouseLeave={onHover}>
      <Typed strings={['Say Hello!']} typeSpeed={75} />
      {hover ? <ContactInfoIcon /> : <HelloIcon />}
     </GoContactButton>
    </HeaderOpenBtnWrapper>
    <HeaderOpenSubHeading>
     <Typed strings={['Web Development', 'Full Stack Software Engineering', 'MERN']} typeSpeed={70} backSpeed={90} loop />
    </HeaderOpenSubHeading>
   </HeaderOpenContent>
  </HeaderOpenContainer>
 )
}

export default HeaderOpenSection
