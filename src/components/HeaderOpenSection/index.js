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

  </HeaderOpenContainer>
 )
}

export default HeaderOpenSection
