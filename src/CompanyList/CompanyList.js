import React, { Component } from 'react';
import './CompanyList.css';


class CompanyList extends Component {
    createCompany = () => {

    }

    render() {
        return (
            <div>
                <div className="companyList"></div>
                <button onClick={this.createCompany()}>New Company</button>
            </div>
        );
    }
}

export default CompanyList;
