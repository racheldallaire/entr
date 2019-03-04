import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    IconButton,
    ListItem, 
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';
import { Delete, ExpandMore } from '@material-ui/icons';

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
        return (
            <ListItem>
                <ExpansionPanel className="companyListItem">
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <ListItemAvatar>
                            <Avatar>
                                {this.props.name[0]}
                            </Avatar>
                        </ListItemAvatar>  
                        <ListItemText
                            primary={this.props.name}
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
                        { this.state.selectedUsers.length === 0 ? 
                            <IconButton 
                                className="deleteCompany"
                                onClick={this.props.deleteCompany} 
                                variant="contained" 
                                color="secondary">
                                <Delete />
                            </IconButton> 
                            : '' 
                        }
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ListItem>
        );
    }
}

export default CompanyItem;
