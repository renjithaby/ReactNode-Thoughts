/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';



class SignInPage extends React.Component {

    constructor(props){
        super(props);
        console.log( this.props.myRoute);
         this.state = {username :"username", password :"password"};
    }


    handleUserNameChange(event) {
        this.setState({username : event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password : event.target.value});
    }

    handleUserEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSignIn(event) {
        event.preventDefault();
        this.props.loginUser({username:this.state.username,password: this.state.password});
        return false;
    }


    render() {
        return (
            <div className =" form-block ">
                <form  onSubmit = {this.handleSignIn.bind(this)}>
                    <div className="form-group">
                        <label> User Name </label>
                        <input className="form-control"  value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> Password </label>
                        <input className="form-control"  value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                    </div>

                    <input className="btn-green" type="submit" value="SignIn" />
                </form>
            </div>
        );
    }
}


export default SignInPage;
