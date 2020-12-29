import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Qualifications from './Qualifications'
import EngagementHistory from './EngagementHistory'
import { CounterContext } from './context/counter-context'
import { useContext, useState } from 'react';
import Image from './main.jpg'
import Header from './Header'
import useRowStyles from './styles/Makestyles'
import getMuiTheme from './styles/Overridestyles'
const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" }
];

const data = [
  { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
  { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
  { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
  { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
  { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
  { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
  { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
  { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
  { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
  { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
  { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
];
function Rowdata(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [backgroundColor, setbackgroundColor] = React.useState("#041f42");

  const classes = useRowStyles();
  return (
    <React.Fragment >
      <TableRow className={classes.root}
        style={{ paddingBottom: 0, paddingTop: 30, paddingRight: 0, paddingLeft: 0, border: `2px solid ${backgroundColor}` }} onMouseEnter={() => {
          setbackgroundColor('  #1b9bd7');
        }}
        onMouseLeave={() => {
          setbackgroundColor("#041f42");
        }}
        onClick={() => (setOpen(!open))}  >

        <TableCell component="th" scope="row" style={{ paddingTop: 20 }}  >
          {row.club_name}
        </TableCell>
        <TableCell align="left" >{row.main_ground}</TableCell>
        <TableCell align="left">{row.address}</TableCell>
        <TableCell align="left">{row.league}</TableCell>
        <TableCell >
          <IconButton aria-label="expand row" style={{ color: "white" }} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* background */}
      <TableRow  >
        {/* subtable => Engagement history  */}
        <EngagementHistory row={row} open={open} />
        {/* subtable =>Qualifications  */}
        <Qualifications row={row} open={open} />
      </TableRow>
    </React.Fragment>
  );
}

export default function APP() {
  const [state, dispatch] = useContext(CounterContext)
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setoptions] = React.useState([
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 },
  ]);


  return (
    <div  >
      <Header />
      <MuiThemeProvider theme={getMuiTheme()}>
        <TableContainer component={Paper} >

          <Table aria-label="collapsible table" style={{
            backgroundImage: `url(${Image})`
          }} >
            <TableHead  >
              <TableRow  >

                <TableCell>Contact Name</TableCell>
                <TableCell align="left">Role</TableCell>
                <TableCell align="left">Club</TableCell>
                <TableCell align="left">League</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody   >
              {state.clubs.map((row) => (
                <Rowdata key={row.club_name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiThemeProvider>


    </div>
  );
}
