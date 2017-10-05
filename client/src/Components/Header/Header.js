/**
 *Created by rabby
 * Component that handles the Header view of the application.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../History';
import './Header.css';
const LoggedOutView = props => {
        return (
            <ul className="nav navbar-nav pull-xs-right">

                <li className=  {props.pathname ==="/feed"?"nav-item active":"nav-item inactive"}>
                    <Link to="/feed" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className={props.pathname ==="/signin"?"nav-item active":"nav-item inactive"}>
                    <Link to="/signin" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className={props.pathname ==="/signup"?"nav-item active":"nav-item inactive"}>
                    <Link to="/signup" className="nav-link">
                        Sign up
                    </Link>
                </li>


            </ul>
        );
};


const LoggedInView = props => {
        var regex = new RegExp(/\/userprofile\//);
        return (

                <ul className="nav navbar-nav pull-xs-right">

                    <li className={props.pathname ==="/feed"?"nav-item active":"nav-item inactive"}>
                        <Link to="/feed" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className={props.pathname ==="/newpost"?"nav-item active":"nav-item inactive"}>
                        <Link to="/newpost" className="nav-link">
                            New Post
                        </Link>
                    </li>

                    <li onClick ={props.showUserProfile.bind(this)} className={regex.test(props.pathname)?"nav-item active":"nav-item inactive"}>
                        <Link to=""  className="nav-link">
                            {props.currentUser.username}
                        </Link>
                    </li>

                    <li onClick = {props.handleLogout.bind(this)} className="nav-item">
                        <Link to=""  className="nav-link">
                            logout
                        </Link>
                    </li>

                </ul>
        );
};

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hide: false};
    }

    showUserProfile(){
        history.push('/userprofile/'+this.props.currentUser._id);
    }

    handleLogout(){
        this.props.handleLogout();
    }

    handleMenuIconClick(){
        this.setState({hide:!this.state.hide});
    }

    render() {
        return (
            <div className= "header">
                <nav className="navbar navbar-light">
                    <div className="container">

                        <ul className="nav navbar-nav ">
                            <li>
                                <Link className= " header-title pull-xs-left" to="/">
                                    Thoughts!
                                </Link>
                                <i onClick = {this.handleMenuIconClick.bind(this)} className=" menu-icon fa fa-bars " aria-hidden="true"></i>

                            </li>
                        </ul>
                        <div className ={this.state.hide?"hide-menu":""}>
                            {!this.props.currentUser._id? <LoggedOutView currentUser={this.props.currentUser} appName ={this.props.appName} pathname={this.props.location?this.props.location.pathname:""}/>:null}
                            {this.props.currentUser._id? <LoggedInView showUserProfile = {this.showUserProfile.bind(this)}   pathname={this.props.location?this.props.location.pathname:""}
                                currentUser={this.props.currentUser}
                                handleLogout ={this.handleLogout.bind(this)}
                                appName ={this.props.appName}/>:null}
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}


export default Header;