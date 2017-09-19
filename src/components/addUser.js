import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser, deleteUser, modifiedUserDetails} from '../actions';
import store from '../store.js';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.addUser = this.addUser.bind(this);
        this.id = 0;
        this.state = {
            fname : this.props.fname,
            lname : this.props.lname,
            state : this.props.state,
            city : this.props.city,
            id : this.props.id || Date.now()
        }
    }
    onChange(evt){
        this.setState({[evt.target.name] : evt.target.value});
    }
    addUser(evt){
        evt.preventDefault();
        if(this.props.params.actType === 'add'){
            this.id++;
            this.setState({
                id : Date.now()
            })
            store.dispatch(addUser(this.state));
        }
        else if(this.props.params.actType === 'edit'){
            store.dispatch(modifiedUserDetails(this.state));
        }
        this.context.router.push('/dashboard/usersList');
    }
    
    render(){
        return(
            <div>
                <form action="" onSubmit = {this.addUser}>
                    <div>
                        <label htmlFor="">First name</label>
                        <input value=  {this.state.fname} name = "fname" type="text" onChange = {this.onChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input value=  {this.state.lname} name = "lname" type="text" onChange = {this.onChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="">State</label>
                        <select value=  {this.state.state} name = "state" id="" onChange = {this.onChange}>
                            <option value="">Select State</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div> <br/>
                    <div>
                        <label htmlFor="">City</label>
                        <select value=  {this.state.city} name = "city" id="" onChange = {this.onChange}>
                            <option value="">Select City</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Karnataka">Karnataka</option>
                        </select>
                    </div> <br/>
                    <div>
                        <input type="submit" value = "submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        fname : state.addUser.editUser.fname,
        lname : state.addUser.editUser.lname,
        state : state.addUser.editUser.state,
        city : state.addUser.editUser.city,
        id : state.addUser.editUser.id
    }
}

AddUser.contextTypes = {
    router : React.PropTypes.object.isRequired
}
export default connect(mapStateToProps)(AddUser);
