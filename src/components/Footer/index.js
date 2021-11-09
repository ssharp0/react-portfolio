import React from 'react'
import { makeStyles } from "@mui/styles";
import { animateScroll as scroll } from 'react-scroll'

import { 
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinkItems, 
  FooterLinkHeading, 
  FooterSiteDetails, 
} from './FooterElements'

import { 
  BottomNavigation, 
  BottomNavigationAction 
} from "@mui/material";

import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon 
} from '@mui/icons-material'

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: '#A56336',
      "&:hover": {
        fill: '#fff',
        fontSize: '3rem',
      }
    }
  }
})

const Footer = () => {

  const toggleToTop = () => {
    scroll.scrollToTop()
  }

  const classes = useStyles()

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinkItems>
              <FooterLinkHeading to='/' onClick={toggleToTop}>@ScottHarp</FooterLinkHeading>
              <BottomNavigation width="auto" style={{ background: 'transparent' }}>
                <BottomNavigationAction className={classes.root} style={{ padding: 0 }} href="https://github.com/ssharp0" target="_blank" icon={<GitHubIcon />} />
                <BottomNavigationAction className={classes.root} style={{ padding: 0 }} href="https://www.linkedin.com/in/scott-harp-61231745/" target="_blank" icon={<LinkedInIcon />} />
              </BottomNavigation>
            </FooterLinkItems>
        </FooterLinksContainer>
        <FooterSiteDetails>
          ScottHarp Portfolio
        </FooterSiteDetails>
        <FooterSiteDetails>
          {new Date().getFullYear()}
        </FooterSiteDetails>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
