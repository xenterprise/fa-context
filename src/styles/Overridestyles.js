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
      // Header icon button 
      MuiSvgIcon:{
        root:{
          paddingTop:"6px"
        }
      },
      // form details 
      // placeholder color
      MuiInputLabel:{
        root:{
          color:"white"
        },
      },
      // input color 
      MuiOutlinedInput:{
        root:{
          color:"white",
          backgroundColor:"#1d2749"
        },
        input:{
          color:"white",
        },
      },
     
      input: {
        "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px black inset",
        backgroundColor:"black"
        }
        }
    }
  });
  export default getMuiTheme