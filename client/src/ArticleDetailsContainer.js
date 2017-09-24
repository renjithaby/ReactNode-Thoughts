import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import NewPostPage  from './NewPostPage';
import UserProfilePage  from './UserProfilePage';
import ArticleDetailHeader  from './ArticleDetailHeader';
import CommentItem from './CommentItem';
import NewCommentItem  from './NewCommentItem';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class ArticleDetails extends Component {
    constructor(props){
        super(props);


    }


    componentDidMount(props){
        this.props.getArticleById(this.props.match.params.id);
        this.props.getArticleComments(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){

    }

    addNewComment(comment) {

        this.props.addNewComment({comment: comment,user:{ userid :this.props.userData._id, username:this.props.userData.username}, articleid :this.props.selectedArticle.article._id});

    }

    removeComment(commentid){
        this.props.removeComment({articleid:this.props.selectedArticle.article._id, commentid:commentid});
    }

    render() {
        return (
            <div>
                {this.props.selectedArticle.article._id?<ArticleDetailHeader article = {this.props.selectedArticle.article}/>:null}

                <div className = "container"> {this.props.selectedArticle.article.content}
                <hr/>
                {this.props.userData._id ? <NewCommentItem  addNewComment = {this.addNewComment.bind(this)} />:null}

                     <ul >

                     {this.props.selectedArticle.comments.map((item) =>
                     <CommentItem key ={item._id} comment = {item}
                     loggedInUser = {this.props.userData }
                     removeComment = {this.removeComment.bind(this)}
                     />

                     )}
                     </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData.user,
        selectedArticle: state.articleData.selectedArticle,
        myprops:state.articleData
    }
}


const mapDispatchToProps = dispatch => {
    return {

        getUserArticles:userid => {
            dispatch(Actions.getUserArticles(userid));
        },
        getArticleComments:articleid => {
            dispatch(Actions.getArticleComments(articleid));
        },
        addNewComment:commentData => {
            dispatch(Actions.addNewComment(commentData));
        },
        removeComment:data => {
            dispatch(Actions.removeComment(data));
        },
        getArticleById:articleid =>{
            dispatch(Actions.getArticleById(articleid));
        }
    }
}


export const  ArticleDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
