import React, { useState } from 'react'

import { 
  ProjectsContainer, 
  ProjectsHeading, 
  ProjectsHeader, 
  ProjectsWrapper, 
  ProjectsCard, 
  ProjectsIcon, 
  ProjectsDescription, 
  ProjectsBtnWrapper, 
  ProjectsBadgesWrapper, 
  ProjectsBadges 
} from './ProjectElements'

import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

import { Button as ButtonMaterial } from '@mui/material';
import { makeStyles } from "@mui/styles";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs 
} from 'react-icons/fa'

import { 
  SiBulma, 
  SiFirebase, 
  SiPassport, 
  SiSequelize, 
  SiMongodb, 
  SiMaterialui, 
  SiReact, 
  SiExpress, 
  SiHeroku 
} from 'react-icons/si'

import { AiFillApi } from 'react-icons/ai'
import { DiMysql } from 'react-icons/di'

import BookBusterImg from '../../images/BookBuster700x530.png'
import MePlantImg from '../../images/mePlant530x530.png'
import SynergizeImg from '../../images/SynergizeLogin.png'


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

    <ProjectsCard elevation={8}>
     <ProjectsHeader>BookBuster</ProjectsHeader>
     <ProjectsIcon src={BookBusterImg} />
     <ProjectsDescription>Search for your favorite books and movies!</ProjectsDescription>
     <ProjectsBadgesWrapper>
      <ProjectsBadges><FaHtml5 className={classes.badgeIcon} /></ProjectsBadges>
      <ProjectsBadges><FaCss3Alt className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><FaJs className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiBulma className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><AiFillApi className={classes.badgeIcon}/></ProjectsBadges>
     </ProjectsBadgesWrapper>
     <ProjectsBtnWrapper>
      <ButtonMaterial href="https://polyca123.github.io/Bookbuster/" target="_blank" className={classes.demoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={ondemoHoverProj1} onMouseLeave={ondemoHoverProj1} primary="true" dark="true">
       {demoHoverProj1 ? <LanguageIcon /> : 'Demo'}
      </ButtonMaterial>
      <ButtonMaterial href="https://github.com/polyca123/Bookbuster" target="_blank" className={classes.repoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={onrepoHoverProj1} onMouseLeave={onrepoHoverProj1} primary="true" dark="true">
       {repoHoverProj1 ? <CodeIcon /> : 'Repo'}
      </ButtonMaterial>
     </ProjectsBtnWrapper>
    </ProjectsCard>

    <ProjectsCard elevation={8}>
     <ProjectsHeader>MePlant</ProjectsHeader>
     <ProjectsIcon src={MePlantImg} />
     <ProjectsDescription>Track your plant care and blog with others!</ProjectsDescription>
     <ProjectsBadgesWrapper>
      <ProjectsBadges><FaNodeJs className={classes.badgeIcon} /></ProjectsBadges>
      <ProjectsBadges><DiMysql className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiFirebase className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiPassport className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiSequelize className={classes.badgeIcon}/></ProjectsBadges>
     </ProjectsBadgesWrapper>
     <ProjectsBtnWrapper>
      <ButtonMaterial href="https://meplant-app.herokuapp.com/" target="_blank" className={classes.demoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={ondemoHoverProj2} onMouseLeave={ondemoHoverProj2} primary="true" dark="true">
       {demoHoverProj2 ? <LanguageIcon /> : 'Demo'}
      </ButtonMaterial>
      <ButtonMaterial href="https://github.com/gresendi/mePlants" target="_blank" className={classes.repoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={onrepoHoverProj2} onMouseLeave={onrepoHoverProj2} primary="true" dark="true">
       {repoHoverProj2 ? <CodeIcon /> : 'Repo'}
      </ButtonMaterial>
     </ProjectsBtnWrapper>
    </ProjectsCard>

    <ProjectsCard elevation={8}>
     <ProjectsHeader>Synergize</ProjectsHeader>
     <ProjectsIcon src={SynergizeImg} />
     <ProjectsDescription>Manage your calendar and find times with friends!</ProjectsDescription>
     <ProjectsBadgesWrapper>
      <ProjectsBadges><SiMongodb className={classes.badgeIcon} /></ProjectsBadges>
      <ProjectsBadges><SiMaterialui className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiReact className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiExpress className={classes.badgeIcon}/></ProjectsBadges>
      <ProjectsBadges><SiHeroku className={classes.badgeIcon}/></ProjectsBadges>
     </ProjectsBadgesWrapper>
     <ProjectsBtnWrapper>
      <ButtonMaterial href="https://synergize-27.herokuapp.com/" target="_blank" className={classes.demoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={ondemoHoverProj3} onMouseLeave={ondemoHoverProj3} primary="true" dark="true">
       {demoHoverProj3 ? <LanguageIcon /> : 'Demo'}
      </ButtonMaterial>
      <ButtonMaterial href="https://github.com/ssterling27/Project3" target="_blank" className={classes.repoBtn} smooth={true} duration={500} spy={true} exact="true" onMouseEnter={onrepoHoverProj3} onMouseLeave={onrepoHoverProj3} primary="true" dark="true">
       {repoHoverProj3 ? <CodeIcon /> : 'Repo'}
      </ButtonMaterial>
     </ProjectsBtnWrapper>
    </ProjectsCard>

   </ProjectsWrapper>

   <ButtonMaterial className={classes.chckMoreBtn} href="https://github.com/ssharp0" target="_blank" >
     Checkout More on Github!
   </ButtonMaterial>

  </ProjectsContainer>
 )
}

export default ProjectsSection
