import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Header from './components/Header';
import CompanyInfo from './components/CompanyInfo';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>}/>
            <Route path='/company' render={() => <Header><CompanyInfo /></Header>} />
        </Switch>
    </Router>,
     document.getElementById("root"));

