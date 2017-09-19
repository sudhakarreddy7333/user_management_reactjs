import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return (
            <div>
                <Link to  = "/dashboard/addUser/add">Add User</Link> <br/>
                <Link to  = "/dashboard/usersList">Users List</Link>
                {this.props.children}
            </div>
        )
    }
}

export default Dashboard;