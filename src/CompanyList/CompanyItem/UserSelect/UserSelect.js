import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Checkbox,
    Chip, 
    FormControl, 
    Input, 
    InputLabel,
    ListItemText,
    MenuItem, 
    Select 
} from '@material-ui/core';

import './UserSelect.css';


class UserSelect extends Component {
    static propTypes = {
        users: PropTypes.object,
        selectedUsers: PropTypes.array,
    }

    handleChange = (event) => {
        this.props.setSelectedUsers(event.target.value);
    }

    handleDelete = (userId) => () => {
        let newSelectedUsers = [...this.props.selectedUsers];
        newSelectedUsers.splice(this.props.selectedUsers.indexOf(userId), 1);

        this.props.setSelectedUsers(newSelectedUsers);
    }
    
    render() {
        return (
            <FormControl className="selectUsers">
                <InputLabel htmlFor="select-multiple-checkbox">Assign Users</InputLabel>
                <Select
                    multiple
                    value={this.props.selectedUsers}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={(selected) => selected.map((userId, index) => {
                        return (
                            <Chip
                                key={index}
                                label={this.props.users[userId]}
                                onDelete={this.handleDelete(userId)}
                            />
                        )
                    })}
                >
                    {Object.keys(this.props.users).map((userId) => (
                        <MenuItem key={userId} value={userId}>
                            <Checkbox 
                                checked={this.props.selectedUsers.indexOf(userId) > -1}
                                style={{color: "#7c60e3"}}
                            />
                            <ListItemText primary={this.props.users[userId]} />
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
        );
    }
}

export default UserSelect;
