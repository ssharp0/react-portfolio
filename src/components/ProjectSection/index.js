import React, { useState } from 'react'

import { 
  ProjectsContainer, 
  ProjectsHeading, 
  ProjectsHeader, 
  ProjectsWrapper, 

} from './ProjectElements'

import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

import { Button as ButtonMaterial } from '@mui/material';
import { makeStyles } from "@mui/styles";




const useStyles = makeStyles({
 demoBtn: {
  color: '#fff !important',
  backgroundColor: '#A56336 !important',
 },
 repoBtn: {
  color: '#fff !important',
  backgroundColor: '#A56336 !important',
 },
 badgeIcon: {
  height: '30px',
  width: '30px'
 },
 chckMoreBtn: {
  marginTop: '40px !important',
  background: '#6F523B !important',
  borderRadius: '10px !important',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff !important',
  padding: '10px !important',
  boxShadow: '0 5px 5px rgba(0,0,0,0.2); !important',

  '&:hover': {
   backgroundColor: '#fff !important',
   color: '#0A0908 !important',
   transition: 'all 0.5s ease-in-out'
  }
 }
})

const ProjectsSection = () => {

 const [demoHoverProj1, setdemoHoverProj1] = useState(false)
 const [repoHoverProj1, setrepoHoverProj1] = useState(false)

 const [demoHoverProj2, setdemoHoverProj2] = useState(false)
 const [repoHoverProj2, setrepoHoverProj2] = useState(false)

 const [demoHoverProj3, setdemoHoverProj3] = useState(false)
 const [repoHoverProj3, setrepoHoverProj3] = useState(false)

 const ondemoHoverProj1 = () => {
  setdemoHoverProj1(!demoHoverProj1)
 }

 const onrepoHoverProj1 = () => {
  setrepoHoverProj1(!repoHoverProj1)
 }

 const ondemoHoverProj2 = () => {
  setdemoHoverProj2(!demoHoverProj2)
 }

 const onrepoHoverProj2 = () => {
  setrepoHoverProj2(!repoHoverProj2)
 }

 const ondemoHoverProj3 = () => {
  setdemoHoverProj3(!demoHoverProj3)
 }

 const onrepoHoverProj3 = () => {
  setrepoHoverProj3(!repoHoverProj3)
 }

 const classes = useStyles()

 return (
  <ProjectsContainer id="projects">
   <ProjectsHeading>Highlighted Projects</ProjectsHeading>
   <ProjectsWrapper>



   </ProjectsWrapper>

   <ButtonMaterial className={classes.chckMoreBtn} href="https://github.com/ssharp0" target="_blank" >
     Checkout More on Github!
   </ButtonMaterial>

  </ProjectsContainer>
 )
}

export default ProjectsSection
