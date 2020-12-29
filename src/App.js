import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
import { useContext } from 'react';
import Image from './main.jpg'
import Header from './Header'
import useRowStyles from './styles/Makestyles'
import getMuiTheme from './styles/Overridestyles'

function Rowdata(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [backgroundColor, setbackgroundColor] = React.useState("#041f42");

  const classes = useRowStyles();
  return (
    <React.Fragment >
      <TableRow className={classes.root}
        style={{ border: `2px solid ${backgroundColor}` }} onMouseEnter={() => {
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
          <IconButton aria-label="expand row" className={classes.iconcolor} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow  >
        {/* sub tables */}
        <EngagementHistory row={row} open={open} />
        <Qualifications row={row} open={open} />
      </TableRow>
    </React.Fragment>
  );
}

export default function APP() {
  const [state, dispatch] = useContext(CounterContext)

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
