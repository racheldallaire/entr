import React, { Component } from 'react';
import './Dashboard.css';
import { CompanyList } from './CompanyList';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <CompanyList />
            </div>
        );
    }
}

export default Dashboard;
