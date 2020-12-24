import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Col, Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Qualifications from './Qualifications'
import EngagementHistory from './EngagementHistory'
import { CounterContext } from './context/counter-context'
import { useContext, useState } from 'react';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      backgroundColor:'#041f42'
    },
  },
  subroot: {
    '& > *': {
      borderBottom: 'unset',
      backgroundColor:'#00152e',
      // paddingTop: 10,
      // paddingBottom: 10,
    },
  },
  spacing: {
    '& > *': {
      paddingTop: 10,
    paddingBottom: 10,
      // bordercollapse: separate !important,
    },
  },
});
function Rowdata(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.club_name}
        </TableCell>
        <TableCell align="right">{row.main_ground}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.league}</TableCell>
      </TableRow>

      <TableRow className={classes.subroot}>
        {/* subtable => Engagement history  */}
        <EngagementHistory row={row} open={open} />

        {/* subtable =>Qualifications  */}
        <Qualifications row={row} open={open} />

      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  {
    contactName: "Frozen yoghurt", role: 159, club: 6.0, league: 24, history: [
      { date: '2020-01-05', club: '11091700', staff: 3 },
      { date: '2020-01-02', club: 'Anonymous', staff: 1 },
    ]
  },
  {
    contactName: "Frozen yoghur", role: 159, club: 6.0, league: 24, history: [
      { date: '2020-01-0', club: '1109170', staff: 3 },
      { date: '2020-01-0', club: 'Anonymou', staff: 1 },
    ]
  }
];

export default function APP() {
  const [state, dispatch] = useContext(CounterContext)
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Contact Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Club</TableCell>
            <TableCell align="right">League</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {state.clubs.map((row) => (
            <Rowdata key={row.club_name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
