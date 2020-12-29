import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { Container } from "@material-ui/core"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { MuiThemeProvider } from '@material-ui/core/styles';
import EngagemenstControls from './EngagementsControls'
import { CounterContext } from './context/counter-context'
import { useContext } from 'react';
import useStyles from './styles/Makestyles'
import getMuiTheme from './styles/Overridestyles'

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

        <Accordion style={{
          borderBottom: `2px solid ${border}`
        }} onMouseEnter={() => {
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
              <Toolbar className={classes.navbarcolor} >
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
          </AccordionDetails>
        </Accordion>
      </MuiThemeProvider>
    </div>
  )
}
export default Header