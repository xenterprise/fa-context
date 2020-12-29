import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {

      MUIDataTable: {
        root: {
          backgroundColor: "red",
        },
        paper: {
          boxShadow: 'none',
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: '#f00',
        },
      },
      MuiTableCell: {
        body: {
          color: 'white',
        },
        head: {
          color: 'white',
          backgroundColor: "#00152e"
        }
      },
      MUIDataTableSelectCell: {
        headerCell: {
          backgroundColor: 'blue',
        },
      },

      MuiTableFooter: {
        root: {
          '& .MuiToolbar-root': {
            backgroundColor: 'white',
          },
        },
      },
      MuiAccordionSummary:{
        content:{
          margin:"0px 0px",
          "&$expanded": {
            margin:"0px 0px",              }
        },
      
        root:{
          padding:"0px 0px",
        }
      },
    
      MuiAccordionDetails:{
        root:{
          backgroundColor:"#041f42",
        }
      },
    },
  });
  export default getMuiTheme