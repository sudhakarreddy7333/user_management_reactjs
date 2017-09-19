import React, {Component} from 'react';
import { login } from '../actions/index';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
           loginEmail : '',
           loginPassword : ''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    
    handleUserLogin(event){
        event.preventDefault();
        this.context.router.push('/dashboard/addUser/add');
    }
    render(){
        return <div>
                <h4>Login (email : abc@gm.com, pwd : 123)</h4>
                 <form action="" onSubmit = {this.handleUserLogin.bind(this)}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name = "loginEmail" required placeholder = "Enter email" value = {this.props.loginEmail} onChange = {this.onChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name = "loginPassword" required placeholder = "Enter password" value = {this.props.loginPassword} onChange = {this.onChange}/>
                    </div> <br/>
                    <div>
                        <input type="submit" value = "Login"/>
                    </div>
                </form>
            </div>
        
    }
}

LoginForm.contextTypes = {
    router : React.PropTypes.object.isRequired
}
export default LoginForm;