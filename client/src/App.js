import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import {UserProfileContainer}  from './UserProfileContainer';
import {ArticleDetailsContainer}  from './ArticleDetailsContainer';
import {FeedContainer}  from './FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch,Redirect, Link, hashHistory,browserHistory } from 'react-router-dom';
import {jwt} from 'jsonwebtoken';
import history from './History'
class App extends Component {

    componentWillMount(props){
        console.log("appppppp  ..........component will mount...");
        if(sessionStorage.jwt) {
            this.props.loadUserFromToken(sessionStorage.jwt);
        }
    }

    componentWillReceiveProps(nextProps){

        console.log("calling apppppp ");
        console.log(nextProps.userData);

      /*if(nextProps.userData.login){
        this.props.history.push('/signin');
      }*/
      if(nextProps.userData.user && nextProps.userData.user._id){
        //this.props.history.push('/feed');
      }
    }

    requireAuth(){
        /*  <Route path ="/feed" render={()=>this.requireAuth()? <FeedContainer/>:<Redirect to="/signin"/>} /> */
        console.log(jwt);
        //var decoded = jwt.verify(sessionStorage.jwt , "godslove");
        console.log("decoded........................................");
        //console.log(decoded);
        return(sessionStorage.jwt ? true:false);
    }
  render() {
    return (
      <div>

          <Header currentUser = {this.props.userData.user} appName= {"Thoughts!"} handleLogout = {this.props.handleLogout.bind(this)} {...this.props}/>
          <Switch>
          <Route path = "/signup"  component = {()=>  <SignUpPage  registerUser = {this.props.registerUser}  />} />
          <Route path = "/signin"  component = {()=>  <SignInPage  loginUser = {this.props.loginUser} />} />
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
    console.log(" fetching the statess.....");
    console.log(state);
    return {
        userData: state.userData,
        
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
            dispatch(Actions.loadUserFromToken(token));
        },

        handleLogout :()=>{
            dispatch(Actions.handleLogout());
        }


    }
}


export const  AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);




















































