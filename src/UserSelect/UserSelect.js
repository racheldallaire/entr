import React, { Component } from 'react';
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
    constructor(props) {
        super(props);
        const selectedUsers = props.initialUsers.map((userId) => {
            return props.users[userId]
        });
        this.state = {
            users: Object.values(props.users),
            selectedUsers: selectedUsers
        }
    }

    handleChange = (event) => {
        this.setState({ selectedUsers: event.target.value });
    }

    handleDelete = (name) => () => {
        console.log('deleting user:  ', name)
    }
    
    render() {
        return (
            <FormControl className="selectUsers">
                <InputLabel htmlFor="select-multiple-checkbox">Users</InputLabel>
                <Select
                    multiple
                    value={this.state.selectedUsers}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={(selected) => selected.map((name, index) => {
                        return (
                            <Chip
                                key={index}
                                label={name}
                                onDelete={this.handleDelete(name)}
                            />
                        )
                    })}
                >
                    {this.state.users.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={this.state.selectedUsers.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
        );
    }
}

export default UserSelect;
