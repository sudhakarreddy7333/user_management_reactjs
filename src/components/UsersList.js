import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteUser,editUser} from '../actions';
import store from '../store';
class UsersList extends Component {
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this); 
        this.state = {
            users : this.props.users
        }
    }

    deleteUser(uid){
        store.dispatch(deleteUser(uid));
        this.setState({
            users : this.props.users
        })
    }

    editUser(user){
        store.dispatch(editUser(user));
        this.context.router.push('/dashboard/addUser/edit');
    }

    usersTable(){
        return this.state.users.map((user,i)=>{
            return <tr key = {i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td><button onClick = {this.editUser.bind(this,user)}>Edit</button></td>
                <td><button onClick = {this.deleteUser.bind(this,user.id)}>Delete</button></td>
            </tr>
        })
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.usersTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return{
        users : state.addUser.users
    }
        
};

UsersList.contextTypes = {
    router : React.PropTypes.object.isRequired
}

export default connect(mapStateToProps)(UsersList)