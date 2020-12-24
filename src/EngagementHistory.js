import { recomposeColor } from "@material-ui/core";
import React from 'react'
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

function EngagementHistory(props) {
    const { row } = props;
    const { open } = props;
    return (
        <TableCell style={{ paddingBottom: 10, paddingTop: 10 ,
    }} colSpan={2}>
            <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor:'#00152e'}}>
                <Box margin={1}>
                    <Typography variant="h6" gutterBottom component="div">
                        ENGAGEMENT HISTORY
            </Typography>
                    <Table size="small" aria-label="purchases" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Club</TableCell>
                                <TableCell align="right">Staff</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.engagementHistory.map((historyRow) => (
                                <TableRow key={historyRow.date}>
                                    <TableCell component="th" scope="row">
                                        {historyRow.date}
                                    </TableCell>
                                    <TableCell>{historyRow.contact}</TableCell>
                                    <TableCell align="right">{historyRow.staff}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
        </TableCell>
    )
}
export default EngagementHistory
