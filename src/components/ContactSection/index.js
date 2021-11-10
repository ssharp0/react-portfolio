import React from 'react'

import { 
 ContactContainer, 
 ContactWrapper, 
 ContactRow, 
 ContactColumn1, 
 ContactColumn2, 
 ContactHeading, 
 ContactImgWrap, 
} from './ContactElements'

import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Accordion, AccordionSummary, AccordionDetails, Button, Paper, Typography } from '@mui/material'

import { contactDetails, contactData } from './ContactData';

const ContactSection = () => {
 
 return (
  <>
   <ContactContainer id='contact'>
    <ContactWrapper>
     <ContactRow>
      <ContactColumn1>
        <ContactHeading>{contactData.heading}</ContactHeading>
        <hr />
        <br />
        {contactDetails.map(contact => {
         return <Accordion elevation={8} className='contactItem'>
          <AccordionSummary expandIcon={contact.contactIcon} aria-controls="panel1a-content" id="panel1a-header">
           <Typography style={{ padding: '1%', color: '#143642' }} ><strong>{contact.method}</strong></Typography>
          </AccordionSummary>
           <AccordionDetails>
            <Typography>
             {contact.method !== 'Email' ? <Button style={{ backgroundColor: '#A56336' }} variant='contained' href={contact.path} target="_blank">Go To {contact.name}</Button> : <h5 style={{ color: '#A56336'}} >{contact.path}</h5>}
            </Typography>
           </AccordionDetails>
         </Accordion>
        })}
      </ContactColumn1>
      <ContactColumn2>
       <ContactImgWrap>
        <Paper elevation={5} style={{ height: '100%', width: '100%', backgroundColor: '#263C41'}}>
         <ContactPageIcon style={{ height: '100%', width: '100%', color: 'white' }} />
        </Paper>
       </ContactImgWrap>
      </ContactColumn2>
     </ContactRow>
    </ContactWrapper>
   </ContactContainer>
  </>
 )
}

export default ContactSection