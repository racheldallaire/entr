import React, { Component } from 'react';
import CompanyList from '../CompanyList/CompanyList';

import './Dashboard.css';


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
