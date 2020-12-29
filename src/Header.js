import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EngagementHistory from './EngagementHistory'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import EngagemenstControls from './EngagementsControls'
import { CounterContext } from './context/counter-context'
import { useContext, useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});
const   getMuiTheme = () =>
createMuiTheme({
  overrides: {
    MuiAccordionSummary:{
      content:{
        margin:"0px 0px",
        // padding:"0px px",
        // border:"2px solid yellow"
        "&$expanded": {
          margin:"0px 0px",              }
      },
    
      root:{
        padding:"0px 0px",
        backgroundColor:"#03162e",
      }
    },
    // MuiAccordionSummary:{
    //   root:{
    //     padding:"0px 0px",
    //     // margin:"0px 0px",
    //     backgroundColor:"#03162e",
       
    //   },
    // },
    MuiAccordionDetails:{
      root:{
        backgroundColor:"#041f42",
        // minWidth:"100px"
      }
    },
  }
 
});
const navLinks = [
  { title: `DASHBOARD`, path: `/about-us` },
  { title: `CONTACTS`, path: `/product` },
  { title: `CLUBS`, path: `/blog` },
  { title: `ENGAGEMENT`, path: `/contact` },
  { title: `STAFF`, path: `/faq` },
]
const Header = () => {
  const classes = useStyles(); // Add this
  const [open, setOpen] = React.useState(false);
  const [border, setborder] = React.useState("#041f42");
  const [state, dispatch] = useContext(CounterContext)

  return (
    <div >
        <MuiThemeProvider theme={getMuiTheme()}>

    <Accordion   style={{        borderBottom: `2px solid ${border}`
        }}  onMouseEnter={() => {
          setborder('  #1b9bd7');
        }}
        onMouseLeave={() => {
          setborder("#041f42");
        }} >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "#041f42" }} >
        <Container className={classes.navbarDisplayFlex} >
          <h2   >Club Engagements</h2>
          <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
    </AccordionSummary>
    <AccordionDetails>
    <EngagemenstControls row={state.clubs} />
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
    </Accordion>
    </MuiThemeProvider>
    </div>
  )
}
export default Header