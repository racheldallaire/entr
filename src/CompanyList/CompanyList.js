import React, { Component } from 'react';
import { Delete, ExpandMore, Save } from '@material-ui/icons';
import {
    Avatar,
    Button,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    IconButton,
    List, 
    ListItem, 
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
} from '@material-ui/core';

import { companies, users, companyOrder } from '../demoData.json';
import UserSelect from '../UserSelect/UserSelect.js';
import './CompanyList.css';


class CompanyList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            addingCompany: false, 
            companies: companies,
            companyNameInput: '',
            companyDescInput: '',
            companyOrder: companyOrder,
            users: users
        }
    }

    addCompany = () => {
        const newId = 'c-' + Math.random().toString(36).substr(2, 9) + '-' + String(Date.now()).substr(4);     
        this.setState({
            addingCompany: false,
            companies: {
                ...companies, 
                [newId]: {
                    name: this.state.companyNameInput,
                    description: this.state.companyDescInput,
                    users: []
                }
            },
            companyNameInput: '',
            companyDescInput: '',
            companyOrder: [...this.state.companyOrder, newId]
        });
    }

    generateInput = (index) => {
        return (
            <ListItem key={index}>
                <ListItemAvatar>
                    <Avatar>
                        {this.state.companyNameInput[0]}
                    </Avatar>
                </ListItemAvatar>  
                <ListItemText>
                    <TextField
                        id="standard-uncontrolled"
                        label="Company Name"
                        className="companyNameInput"
                        onChange={(e) => {this.setState({companyNameInput: e.target.value})}}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Description"
                        className="companyDescInput"
                        onChange={(e) => {this.setState({companyDescInput: e.target.value})}}
                        margin="normal"
                        variant="outlined"
                    />   
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Save" onClick={this.addCompany}>
                        <Save />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

    generateListItem = (company, index, avatar, userCount) => {
        return (
            <ListItem key={index}>
                <ExpansionPanel className="companyListItem">
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <ListItemAvatar>
                            <Avatar>
                                {avatar}
                            </Avatar>
                        </ListItemAvatar>  
                        <ListItemText
                            primary={company.name}
                            secondary={company.description}
                        />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UserSelect users={this.state.users} initialUsers={company.users} />
                        { userCount === 0 ? <IconButton className="deleteCompany" variant="contained" color="secondary"><Delete /></IconButton> : '' }
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ListItem>
        )
    }

    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };

    renderInput = () => {
        if (this.state.addingCompany) {
            return this.generateInput('a')
        }
    }

    renderList = () => {
        var listItems = [];
        this.state.companyOrder.forEach((companyId) => {
            const company = this.state.companies[companyId];
            listItems.push(
                this.generateListItem(company, companyId, company.name[0], 0)
            );
        });

        return (
            <List>
                {listItems}
            </List>
        )
    }

    toggleCompanyInput = () => {
        this.setState({addingCompany: true});
    }

    render() {
        return (
            <div className="companyList">
                <div className="list">
                    {this.renderList()}
                    {this.renderInput()}
                </div>
                <Button className="addCompany" onClick={this.toggleCompanyInput} variant="contained" color="primary">
                    New Company
                </Button>
            </div>
        );
    }
}

export default CompanyList;