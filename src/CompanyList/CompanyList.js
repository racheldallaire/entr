import React, { Component } from 'react';
import { Save } from '@material-ui/icons';
import {
    Avatar,
    Button,
    List, 
    ListItem, 
    ListItemAvatar,
    ListItemText,
    TextField,
} from '@material-ui/core';

import { companies, users, companyOrder } from '../demoData.json';
import CompanyItem from './CompanyItem/CompanyItem';
import './CompanyList.css';


class CompanyList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            addingCompany: false, 
            companies: companies,
            companyNameInput: '',
            companyDescInput: '',
            companyOrder: companyOrder
        }
    }

    addCompany = () => {
        // Generate random alphanumerical string to use as a company ID
        const newId = 'c-' + Math.random().toString(36).substr(2, 9) + '-' + String(Date.now()).substr(4); 
        
        // Set the state using the old companies plus the one just inputted by the user
        this.setState({
            addingCompany: false,
            companies: {
                ...this.state.companies, 
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

    onDeleteCompany = (companyId) => () => {
        // We can't mutate state, so we clone the companies and companyOrder before deleting 
        // the company that was removed, then update the state
        let newCompanies = {...this.state.companies};
        delete newCompanies[companyId];

        let newCompanyOrder = [...this.state.companyOrder];
        newCompanyOrder.splice(newCompanyOrder.indexOf(companyId), 1);

        this.setState({companies: newCompanies, companyOrder: newCompanyOrder});
    }

    generateInput = (index) => {
        // This function returns the input fields that will be rendered by renderInput()
        return (
            <ListItem key={index}>
                <ListItemAvatar>
                    <Avatar>
                        { this.state.companyNameInput[0] !== undefined ?
                            this.state.companyNameInput[0].toUpperCase() :
                            ''
                        }
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
            </ListItem>
        )
    }

    renderInput = () => {
        // We need to pass in a unique key into generateInput(), but since it is only used once,
        // it doesn't really matter what we pass in. I used 'a' here.
        if (this.state.addingCompany) {
            return this.generateInput('a')
        }
    }

    renderList = () => {
        var listItems = [];
        this.state.companyOrder.forEach((companyId) => {
            const company = this.state.companies[companyId];
            listItems.push(
                <CompanyItem
                    key={companyId} 
                    id={companyId}
                    name={company.name}
                    description={company.description}
                    users={users}
                    initialSelectedUsers={company.users}
                    deleteCompany={this.onDeleteCompany(companyId)} 
                />
            );
        });

        // Each listItem element is a child of <List>
        return (
            <List>
                {listItems}
            </List>
        )
    }

    toggleCompanyInput = () => {
        this.setState({addingCompany: true});
    }

    cancelCompanyInput = () => {
        this.setState({
            addingCompany: false,
            companyNameInput: '',
            companyDescInput: '',
        })
    }

    render() {
        // In the render, we make the 'Save' button disabled if the company name field is blank, and 
        // don't display the 'New Company' button while addingCompany state is true.
        return (
            <div className="companyList">
                <div className="list">
                    {this.renderList()}
                    {this.renderInput()}
                </div>
                {this.state.addingCompany ? 
                <div className="buttonContainer">
                    {this.state.companyNameInput === '' ? 
                        <Button 
                            disabled 
                            variant="contained"
                        >
                            <Save /> Save
                        </Button> : 
                        <Button 
                            aria-label="Save" 
                            onClick={this.addCompany}
                            variant="contained"
                            color="primary"
                        >
                            <Save /> Save
                        </Button> 
                    }
                    <Button 
                        aria-label="Cancel" 
                        className="cancelEntry"
                        onClick={this.cancelCompanyInput}
                        variant="outlined"
                        color="secondary"
                    >
                        Cancel
                    </Button>
                </div> :
                <Button 
                    className="addCompany" 
                    onClick={this.toggleCompanyInput} 
                    variant="contained" 
                    color="primary"
                >
                    New Company
                </Button>
                }
            </div>
        );
    }
}

export default CompanyList;