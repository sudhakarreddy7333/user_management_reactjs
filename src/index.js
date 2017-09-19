import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { Router , browserHistory, Route, Link ,IndexRoute} from 'react-router';
import Dashboard from './components/dashboard';
import UsersList from './components/UsersList';
import AddUser from './components/addUser';

ReactDOM.render(
        <Provider store = {store}>
            <Router history = {browserHistory}>
                <Route path = "/" component = {App}>
                </Route>
                <Route path = "/dashboard" component = {Dashboard}>
                    <Route path = "usersList" component = {UsersList}></Route>
                    <Route path = "addUser/:actType" component = {AddUser}></Route>
                </Route>
                 
            </Router>
        </Provider> ,document.getElementById('root'));

