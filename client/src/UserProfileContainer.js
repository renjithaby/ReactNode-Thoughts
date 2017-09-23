import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import UserProfilePage  from './UserProfilePage';
import {FeedContainer}  from './FeedContainer';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class UserProfile extends Component {
    constructor(props){
        super(props);

        //this.state = {};

    }

    componentDidMount(props){
        console.log("UserProfile  ..........component will mount...");
        this.props.getUserById(this.props.match.params.id);
        this.props.getUserArticles(this.props.match.params.id);

    }

    handleLikes(articleid){
        if(this.isArticleLiked(articleid)){
            this.props.removeLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }else{
            this.props.addLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }
    }

    isArticleLiked(articleid){
        var result = this.props.userData.likes.filter(function( obj ) {
            return (obj.articleid === articleid);
        });
        return (result.length > 0);
    }

    render() {
        return (
            <div>
               <UserProfilePage isArticleLiked ={this.isArticleLiked.bind(this)} loggedInUser = {this.props.userData.user}
                    profileUser = {this.props.articleData.selectedProfile.user} userArticles = {this.props.articleData.selectedProfile.articles}
                    addFollowing = {this.props.addFollowing.bind(this)}
                    removeFollowing ={this.props.removeFollowing.bind(this)}
                    handleLikes = {this.handleLikes.bind(this)}
                    isUserLoggedIn = {this.props.userData.user._id?true:false}
               />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" fetching the statess.....");
    console.log(state);
    return {
        userData: state.userData,
        articleData: state.articleData
    }
}


const mapDispatchToProps = dispatch => {
    return {

       getUserArticles:userid => {
            dispatch(Actions.getUserArticles(userid));
        },
        addFollowing: data => {
            dispatch(Actions.addFollowing(data));
        },
        removeFollowing: data => {
            dispatch(Actions.removeFollowing(data));
        },
        addLike: data =>{
            dispatch(Actions.addLike(data));
        },
        getUserById:userid =>{
            dispatch(Actions.getUserById(userid));
        },
        removeLike: data =>{
            dispatch(Actions.removeLike(data));
        }


    }
}


export const  UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
