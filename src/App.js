import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid container spacing={24}>
                    <Grid item xs />
                    <Grid item xs={6}>
                        <Dashboard />
                    </Grid>
                    <Grid item xs />
                </Grid>
            </div>
        );
    }
}

export default App;
