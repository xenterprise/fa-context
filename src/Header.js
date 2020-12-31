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
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditAccountDetails from './EditAccount'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Modal from '@material-ui/core/Modal';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: "20%",
    backgroundColor: "#111a3f"
  },
}));
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiAccordionSummary: {
        content: {
          margin: "0px 0px",
          // padding:"0px px",
          // border:"2px solid yellow"
          "&$expanded": {
            margin: "0px 0px",
          }
        },

        root: {
          padding: "0px 0px",
          backgroundColor: "#03162e",
        }
      },
      // MuiAccordionSummary:{
      //   root:{
      //     padding:"0px 0px",
      //     // margin:"0px 0px",
      //     backgroundColor:"#03162e",

      //   },
      // },
      MuiAccordionDetails: {
        root: {
          backgroundColor: "#03162e",
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
function Header() {
  const classes = useStyles(); // Add this
  const [form, setform] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [border, setborder] = React.useState("#041f42");
  const [state, dispatch] = React.useContext(CounterContext)
  const handleOpen = () => {
    // console.log("form before open",open)
    // setform(!form)
    // state.open
    // state.open()
    // setOpen(!open);
    // console.log(" is form set open",open)

    dispatch({type:"isFormopen",value:!state.open})
    // console.log("form set open",setopen(!open),open )

  };

  // const handleClose = () => {
  //   setOpen(false);
  //   console.log("form close", open)

  // };
  const handleForm = () => {
    console.log("icon button clicked")
    // setform(!isform)
  }
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

                  <div>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={handleOpen}
                    >
                      <AccountCircle />
                    </IconButton>

                  </div>

                  {/* {isform? */}
                  <Modal
                    open={state.open}
                    onClose={handleOpen}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <Drawer
                      className={classes.drawer}
                      variant="permanent"
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      anchor="right"
                    >
                      <div className={classes.toolbar} />
                      <EditAccountDetails />
                      {/* <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
                    </Drawer>
                  </Modal>
                  {/* :<></>  */}
                  {/* }  */}
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