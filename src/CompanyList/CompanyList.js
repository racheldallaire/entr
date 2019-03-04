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
        const newId = 'c-' + Math.random().toString(36).substr(2, 9) + '-' + String(Date.now()).substr(4);     
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
        let newCompanies = {...this.state.companies};
        delete newCompanies[companyId];

        let newCompanyOrder = [...this.state.companyOrder];
        newCompanyOrder.splice(newCompanyOrder.indexOf(companyId), 1);

        this.setState({companies: newCompanies, companyOrder: newCompanyOrder});
    }

    generateInput = (index) => {
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
                        onClick={()=>{this.setState({addingCompany: false})}}
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