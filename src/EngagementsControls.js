import React from 'react'
// import {MultiSelect ,StatefulMultiSelect} from "@khanacademy/react-multi-select";
import MultiSelect from "@khanacademy/react-multi-select";
import { Multiselect } from 'multiselect-react-dropdown';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import { fade, makeStyles } from '@material-ui/core/styles';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import CheckBox from './Checkbox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import ExportCsv from './ExportCsv'
import Search from './Search';

const options = [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 },
];
// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
function getModalStyle() {
    const top = 50 + Math.round(Math.random() * 20) - 10;
    const left = 50 + Math.round(Math.random() * 20) - 10;

    return {
        paddingTop: `${top}%`,
        paddingLeft: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
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
        this.onSelect = this.onSelect.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }
    // const classes = useStyles();

    onSelect(selectedList, selectedItem) {

    }
    onRemove(selectedList, removedItem) {

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
        // setOpen(true);
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        // setOpen(true);
        this.setState({
            open: false
        })
    };
    //   styles = {
    //     option: (base, value) => {
    //         return (shouldBeShown(value) ? { ...base } : { display: 'none'});
    //     }
    // };
    render() {

        const { selected } = this.state;
        console.log("props", this.props.row[1].club_name)
        return (
        // <div>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"

            >
                <Grid md={2}>

                    <h6>Contact</h6>
                    {/* <Search /> */}
                </Grid>

                <Grid md={2}>

                    <h6>Select Club</h6>
                    {/* <div> */}
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
                    {/* </div> */}



                    {/* <input placeholder="Select Club" type="text" onClick={this.handleOpen}/>
                    <Modal 
                        className="dropdown-content"
                        open={this.state.open}
                        onClose={this.handleClose}
                 
                    >
                                <Card styles={{paddingLeft:60}}>
                        <input type="checkbox" onClick={this.handleAllChecked} value="checkedall" style={{ minheight: "510px"}} /> Check / Uncheck All
        <ul>
                            {
                                this.state.fruites.map((fruite) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                                })
                            }
                        </ul>
                    </Card>
                    </Modal> */}
                    {/* </div> */}
                    {/* <Multiselect
                        options={this.state.options1} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        showCheckbox={true}
                        hideSelectedOptions={true}
                        // styles={styles}

                        style={{
                            chips: { // To change css chips(Selected options)
                                background: "#00152e"
                            },
                            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
                                background: "#00152e"
                            },
                            optionContainer: { // To change css for option container 
                                background: "#00152e"

                            },
                            searchBox: { // To change search box element look
                                // border: none,
                                fontsize: "10px",
                                minheight: "22px",
                                background: "#00152e",
                                color: "blue",

                            },
                            option: { // To change css for dropdown options
                                color: "white",
                                background: "#00152e"
                            },
                        }}
                        avoidHighlightFirstOption={true}
                        hidePlaceholder={true}
                        overrideStrings={{
                            selectSomeItems: "Select League ",
                            allItemsAreSelected: "All Leagues are Selected",
                            selectAll: "Select All",
                            search: "Search",

                        }}
                    /> */}
                    <br />
                </Grid>
                <Grid md={2}>
                    <h6>Select League</h6>
                    {/* <div> */}
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
        // </div>
        )
    }
}
export default EngagemenstControls