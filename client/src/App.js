import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SignUpPage  from './Components/SignUp/SignUpPage';
import SignInPage  from './Components/SignIn/SignInPage';
import NewPostPage from './Components/NewPost/NewPostPage';
import {UserProfileContainer}  from './Components/UserProfile/UserProfileContainer';
import {ArticleDetailsContainer}  from './Components/ArticleDetail/ArticleDetailsContainer';
import {FeedContainer}  from './Components/Feeds/FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, } from 'react-router-dom';
import {jwt} from 'jsonwebtoken';
import history from './History'
class App extends Component {

    componentWillMount(props){
        if(sessionStorage.jwt) {
            this.props.loadUserFromToken(sessionStorage.jwt);
        }
    }

    // check the session key in local storage
    requireAuth(){
        return(sessionStorage.jwt ? true:false);
    }

  render() {
    return (
      <div>
          <Header currentUser = {this.props.userData.user} appName= {"Thoughts!"} handleLogout = {this.props.handleLogout.bind(this)} {...this.props}/>
          <Switch>
          <Route path = "/signup"  component = {()=>  <SignUpPage  registerUser = {this.props.registerUser}  />} />
          <Route path = "/signin"  component = {()=>  <SignInPage  loginUser = {this.props.loginUser} login ={this.props.userData.login} />} />
          <Route path ="/feed" component ={()=> <FeedContainer/>} />
          <Route path ="/newpost" component ={()=><NewPostPage currentUser = {this.props.userData.user} addNewArticle = {this.props.addNewArticle}/>}/>
          <Route path ="/userprofile/:id" component ={()=><UserProfileContainer {...this.props}/> } />
          <Route path ="/article/:id" component ={()=><ArticleDetailsContainer {...this.props}/> } />
          <Route component={() => <FeedContainer/>}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: user => {
            dispatch(Actions.registerUser(user));
        },
        loginUser: user => {
            dispatch(Actions.loginUser(user));
        },
        addNewArticle:article => {
            dispatch(Actions.addNewArticle(article));
        },
        loadUserFromToken : token =>{
            dispatch(Actions.loadUserFromToken(token)); //load the user from the stored token
        },
        handleLogout :()=>{
            dispatch(Actions.handleLogout());
        }


    }
}


export const  AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);




















































