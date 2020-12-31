import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useRowStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
            backgroundColor: '#041f42',
            color: 'white',
        },
    },
    subroot: {
        '& > *': {
            borderBottom: 'unset',
            backgroundColor: '#00152e',
        },
    },
    //Edit Account details form
    FormDetails: {
        '& .MuiFormControl-root': {
            width: '100%',
            // height:"100%",
            margin: theme.spacing(1),
            // color:"white"
       
        }

    },
    // paper in account details
    paperContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        width:"80%"

    },
    // spacing between table rows and font color
    Rowspaicng: {
        paddingBottom: 0,
        paddingTop: 8,
        paddingRight: 0,
        paddingLeft: 0,
        color: "white"
    },

    // collapse table
    SubTable: {
        backgroundColor: '#00152e',
        borderRight: "1px solid white"
    },

    // collapse icon arrow color
    iconcolor: {
        color: "white"
    },
    // for nav bar
    navbarcolor: {
        backgroundColor: "#041f42"
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        color: "#1b9bd7",
        '&:hover': {
            // backgroundColor: fade(theme.palette.common.white, 0.25),
            // color:fade("#1b9bd7", 0.1),

        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(-2),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        // paddingTop:"2px",
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        borderBottom: "1px solid white",
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    MuiTableCell: {
        body: {
            color: 'white',
        },
        head: { color: 'white' }
    },
    MuiTableHead: {
        root: {
            backgroundColor: "#03162e"
        },
    },
    MuiTableBody: {
        root: {
            backgroundColor: "#16283d"
        },

    },
    MuiCollapse: {
        wrapper: {
            borderRight: "2px solid gray"

        },
    },
    MuiTableHead: {
        root: {
            backgroundColor: "#03162e"
        },
    },
    MuiTableBody: {
        root: {
            backgroundColor: "#16283d"
        },

    },
    MuiTableCell: {
        body: {
            color: 'white',
        },
        head: { color: 'white' }
    },

//spaces between rows of form
formrows:{
    marginTop:"10px",
    //  marginBottom:"15px",
}

}));
export default useRowStyles