import React, { useEffect } from "react"
import { FormControl, FormLabel } from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles/Makestyles'
import { MuiThemeProvider } from '@material-ui/core/styles';
import getMuiTheme from './styles/Overridestyles'
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import { CounterContext } from './context/counter-context'


const initialAccountValues = {
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    homePhone: '',
    lineManager: '',
    workPhone: '',
    mobile: ''
}
export default function EmployeeForm() {
    const [state, dispatch] = React.useContext(CounterContext)

    const classes = useStyles();
    // const [Name,setName]=usestate();
    const [Values, setValues] = React.useState(initialAccountValues);
    const handleInputChange = (e) => {
        console.log("values of accounts:", e.target.value)
        // const [name, value] = e.target
        setValues({
            ...Values,
            [e.target.name]: e.target.value
        });
    }

    return (
        <MuiThemeProvider theme={getMuiTheme()}>

            {/* <Paper className={classes.paperContent}> */}
            <FormControl className={classes.FormDetails}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="baseline"
                >
                    <FormLabel style={{ color: "white" }}>Personal Deatils</FormLabel>
                    <ClearTwoToneIcon onClick={() => {
                        console.log("red state", state.open)
                        dispatch({ type: "isFormopen", value: !state.open })
                    }} />
                </Grid>
                <Grid container item md={12} >

                    <TextField variant="outlined" label="Full Name" name="fullName" value={Values.fullName} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="First Name" name="firstName" value={Values.firstName} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Last Name" name="lastName" value={Values.lastName} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Email" name="email" value={Values.email} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Line Manager" name="lineManager" value={Values.lineManager} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Role" name="role" value={Values.role} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Home Phone" name="homePhone" value={Values.homePhone} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Work Phone" name="workPhone" value={Values.workPhone} onChange={handleInputChange} className={classes.formrows} />
                    <TextField variant="outlined" label="Mobile" name=" mobile" value={Values.mobile} onChange={handleInputChange} className={classes.formrows} />

                </Grid>
            </FormControl>
            {/* </Paper>  */}
        </MuiThemeProvider>

    )
}