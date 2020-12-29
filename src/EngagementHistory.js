import React from 'react'
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import {  MuiThemeProvider} from '@material-ui/core/styles';
import getMuiTheme from './styles/Overridestyles'
import './App.css';
import useStyles from './styles/Makestyles'

function EngagementHistory(props) {
    const { row } = props;
    const { open } = props;
    const classes = useStyles(); 

    return (
        <MuiThemeProvider theme={getMuiTheme()}>

        <TableCell className={classes.Rowspaicng} colSpan={2}>
            <Collapse in={open} timeout="auto" unmountOnExit className={classes.SubTable} >
                <Box margin={0} >
                    <Typography variant="h6" gutterBottom component="div" >
                        ENGAGEMENT HISTORY
            </Typography>
                    <Table size="small" aria-label="purchases"  >
                        <TableHead >
                            <TableRow >
                                <TableCell >Date</TableCell>
                                <TableCell>Club</TableCell>
                                <TableCell align="left">Staff</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {row.engagementHistory.map((historyRow) => (
                                <TableRow key={historyRow.date}>
                                    <TableCell component="th" scope="row">
                                        {historyRow.date}
                                    </TableCell>
                                    <TableCell>{historyRow.contact}</TableCell>
                                    <TableCell align="left">{historyRow.staff}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
        </TableCell></MuiThemeProvider>
   
    )
}
export default EngagementHistory
