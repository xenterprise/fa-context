import React from 'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import CheckBox from './Checkbox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import ExportCsv from './ExportCsv'
import Search from './Search';

class EngagemenstControls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options1: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Sasm', id: 3 }, { name: 'Saqm', id: 4 }, { name: 'Safm', id: 5 }, { name: 'Sawm', id: 6 }, { name: 'Stam', id: 8 }],
            selected: [],
            open: false,
            iconopen: false,
            fruites: [
                { id: 1, value: "banana", isChecked: false },
                { id: 2, value: "apple", isChecked: false },
                { id: 3, value: "mango", isChecked: false },
                { id: 4, value: "grap", isChecked: false }
            ]

        }

    }

    handleAllChecked = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({ fruites: fruites })
    }
    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked = event.target.checked
        })
        this.setState({ fruites: fruites })
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {

        const { selected } = this.state;
        console.log("props", this.props.row[1].club_name)
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"

            >
                <Grid md={2}>

                    <h6>Contact</h6>
                    <Search />
                </Grid>

                <Grid md={2}>

                    <h6>Select Club</h6>
                    <div style={{ marginTop: '0px', marginLeft: "0px", padding: '0px', borderBottom: "1px solid white", height: '23px', width: '244px' }} class="dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                        <span  >Mouse over me</span>
                        <span style={{ float: 'right' }}>
                            <IconButton aria-label="expand row" size="small" style={{ animationDuration: "2s", color: "white" }} >
                                {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </span>
                        <div class="dropdown-content" >
                            <ul style={{ listStyleType: "none", margin: "0px", paddingLeft: "0px", backgroundColor: "#00152e" }}>
                                {this.state.fruites.map((fruite) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <br />
                </Grid>
                <Grid md={2}>
                    <h6>Select League</h6>
                    <div style={{ marginTop: '0px', marginLeft: "0px", padding: '0px', borderBottom: "1px solid white", height: '23px', width: '244px' }} class="dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                        <span  >Mouse over me</span>
                        <span style={{ float: 'right' }}>
                            <IconButton aria-label="expand row" size="small" style={{ animationDuration: "2s", color: "white" }} >
                                {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </span>
                        <div class="dropdown-content" >
                            <ul style={{ listStyleType: "none", margin: "0px", paddingLeft: "0px", backgroundColor: "#00152e" }}>
                                {this.state.fruites.map((fruite) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <br />
                </Grid>
                <Grid md={2}>
                    <h6>Select Role</h6>
                    <div style={{ marginBottom: '2pxm', marginTop: '0px', marginLeft: "0px", padding: '0px', borderBottom: "1px solid white", height: '23px', width: '244px' }} class="dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                        <span >Mouse over me</span>
                        <span style={{ float: 'right' }}>
                            <IconButton aria-label="expand row" size="small" style={{ animationDuration: "2s", color: "white" }} >
                                {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </span>
                        <div class="dropdown-content" >
                            <ul style={{ listStyleType: "none", margin: "0px", paddingLeft: "0px", backgroundColor: "#00152e" }}>
                                {this.state.fruites.map((fruite) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <br />
                </Grid>
                <Grid md={2}>  <ExportCsv csvData={this.props.row} fileName="csvfie" /></Grid>
            </Grid>
        )
    }
}
export default EngagemenstControls