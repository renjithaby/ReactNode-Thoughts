import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FeedPage  from './FeedPage';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class Feed extends Component {

    constructor(props){
        super(props);
        this.state = {currentFeed: this.props.articleData.feed};

    }

    componentWillMount(){
        this.setCurrentFeed();
    }

    componentWillReceiveProps(nextProps){

    }

    setCurrentFeed(event){
        var name = this.state.currentFeed;
        if(event){
            if(this.state.currentFeed ==="your"){
                name = "global";
            }else{
                name = "your";
            }
        }
        this.setState({currentFeed: name});
        this.props.getFeed({"_id":this.props.userData.user._id,"feed":name});

    }

    isArticleLiked(articleid){
        var result = this.props.userData.likes.filter(function( obj ) {
            return (obj.articleid === articleid);
        });
        return (result.length > 0);
    }

    handleLikes(articleid){
        if(this.isArticleLiked(articleid)){
            this.props.removeLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }else{
            this.props.addLike({"articleid":articleid,"userid":this.props.userData.user._id});
        }
    }



    render() {
        return (
            <div >

                <div className="container feed-tab">
                    <ul className="nav nav-tabs">
                        <li onClick ={this.setCurrentFeed.bind(this)} className={this.state.currentFeed === "your"?"nav-item active":"nav-item"}><a> Your Feed</a></li>
                        <li onClick ={this.setCurrentFeed.bind(this)}className={this.state.currentFeed === "global"?"active":""}><a> Global Feed </a></li>
                    </ul>

                </div>

                <div>
                    <FeedPage isArticleLiked ={this.isArticleLiked.bind(this)}  type = {this.state.currentFeed} feed = {this.state.currentFeed==="global"?this.props.articleData.globalFeed: this.props.articleData.yourFeed}
                    handleLikes = {this.handleLikes.bind(this)}
                    isUserLoggedIn = {this.props.userData.user._id?true:false}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleData: state.articleData,
        userData:state.userData
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
        getFeed: user => {
            if(user.feed === "global") {
                dispatch(Actions.getGlobalFeed());
            }else{
                dispatch(Actions.getYourFeed(user));
            }
        },

        addLike: data =>{
            dispatch(Actions.addLike(data));
        },

        removeLike: data =>{
            dispatch(Actions.removeLike(data));
        }
    }
}


export const  FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);