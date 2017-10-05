/**
 * Created by rabby
 *  Container Component , which handles showing the user profile details
 *  uses 1 direct child components  UserProfilePage and 2 subchilds UserProfileHeader, ArticleItem
 */
import React, { Component } from 'react';
import UserProfilePage  from './UserProfilePage';
import * as Actions from  "../../Actions/Action";
import { connect } from 'react-redux';

class UserProfile extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(props){
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
