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
        color:"#1b9bd7",
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
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
        MuiTableCell: {
            body: {
              color: 'white',
            },
            head:{color: 'white'}
          },
          MuiTableHead:{
              root:{
      backgroundColor:"#03162e"
              },
          },
          MuiTableBody:{
              root:{
                  backgroundColor:"#16283d"
              },
              
          },
          MuiCollapse:{
            wrapper:{
                borderRight:"2px solid gray"
    
            },
        },
        MuiTableHead:{
            root:{
    backgroundColor:"#03162e"
            },
        },
        MuiTableBody:{
            root:{
                backgroundColor:"#16283d"
            },
            
        },
        MuiTableCell: {
          body: {
            color: 'white',
          },
          head:{color: 'white'}
        },
  
  
  
  }));
  export default useRowStyles