/**
 * Created by rabby
 * Component that handles the user Signupform, with base validator
 */

import React from 'react';
import './SignUp.css';

class SignUpPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {username :"",
            password :"",
            email :"",
            usernameValid :{message:"minimum 3 characters required",status:"default"},
            emailValid:{message:"please enter a valid email",status:"default"},
            passwordValid:{message:"minimum 3 character required",status:"default"},
            formValid :false
        };
    }

    componentWillReceiveProps(props){

    }

    handleUserNameChange(event) {
        this.setState( {username : event.target.value},this.validator);
    }

    handlePasswordChange(event) {
        this.setState({password : event.target.value},this.validator);
    }

    handleUserEmailChange(event) {
        this.setState({email: event.target.value},this.validator);
    }

    validator(){
        let formValid = true;

        let emailReg = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        //name
        //min 6 characters
        if(this.state.username.length<3){
            this.setState({usernameValid:{...this.state.usernameValid , status: false}});
            formValid = false;
        }else{
            this.setState({usernameValid:{...this.state.usernameValid , status: true}});
        }

        //password
        //min  3 characters
        if(this.state.password.length<3){
            this.setState({passwordValid:{...this.state.passwordValid , status: false}});
            formValid = false;
        }else{
            this.setState({passwordValid:{...this.state.passwordValid , status: true}});
        }

        //email
        if(!emailReg.test(this.state.email)){
            this.setState({emailValid:{...this.state.emailValid , status: false}});
            formValid = false;
        }else{
            this.setState({emailValid:{...this.state.emailValid , status: true}});
        }

        this.setState({formValid :formValid});
    }



    handleRegister(event) {
        event.preventDefault();

        this.props.registerUser({username:this.state.username,password: this.state.password, email :this.state.email});
        return false;
    }



    render() {

        return (
            <div className =" signup form-block container">
                <form  onSubmit = {this.handleRegister.bind(this)}>
                    <div className={!this.state.usernameValid.status?"form-group has-error":"form-group"}>
                        <label> User Name : </label> <span>{!this.state.usernameValid.status?this.state.usernameValid.message:""} </span>
                        <input className="form-control"  value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
                    </div>

                    <div className= {!this.state.emailValid.status?"form-group has-error":"form-group"}>
                        <label> User Email : </label> <span>{!this.state.emailValid.status?this.state.emailValid.message:""}</span>
                        <input className="form-control"  type = "email" value={this.state.email} onChange={this.handleUserEmailChange.bind(this)}/>
                    </div>

                    <div className={!this.state.passwordValid.status?"form-group has-error":"form-group"}>
                        <label> Password : </label> <span>{!this.state.passwordValid.status?this.state.passwordValid.message:""}</span>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                    </div>

                    <input className="btn-green btn-submit" type="submit" value="SignUp" disabled ={!this.state.formValid } />
                </form>
            </div>
        );
    }
}


export default SignUpPage;
