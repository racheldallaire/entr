import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Button,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    ListItem, 
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';
import { AccountCircle, Delete, ExpandMore } from '@material-ui/icons';

import UserSelect from './UserSelect/UserSelect';
import './CompanyItem.css';


class CompanyItem extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        users: PropTypes.object,
        initialSelectedUsers: PropTypes.array,
        deleteCompany: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedUsers: this.props.initialSelectedUsers
        }
    }

    setSelectedUsers = (newUsers) => {
        this.setState({selectedUsers: newUsers});
    }

    render() {
        // Render individual companyListItem using the props passed down from the Parent component,
        // CompanyList. If a company has no users, the button to delete the company is not displayed.
        return (
            <ListItem>
                <ExpansionPanel className="companyListItem">
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <ListItemAvatar>
                            <div>
                                <Avatar>
                                    {this.props.name[0].toUpperCase()}
                                </Avatar>
                                <AccountCircle className="smallIcon"/>
                                <span className="userCount">{this.state.selectedUsers.length}</span>
                            </div>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="h6" style={{ color: '#7c60e3' }}>
                                    {this.props.name}
                                </Typography>
                            }
                            secondary={this.props.description}
                        />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UserSelect 
                            users={this.props.users} 
                            initialSelectedUsers={this.props.initialSelectedUsers} 
                            selectedUsers={this.state.selectedUsers}
                            setSelectedUsers={this.setSelectedUsers}
                        />
                        <p/>
                        { this.state.selectedUsers.length === 0 ? 
                            <Button 
                                aria-label="Delete"
                                className="deleteCompany"
                                onClick={this.props.deleteCompany} 
                                color="secondary"
                                variant="contained" 
                            >
                                <Delete /> Delete 
                            </Button>
                            : ''
                        }
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ListItem>
        );
    }
}

export default CompanyItem;
