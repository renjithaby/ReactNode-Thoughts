/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import history from './History';
class ArticleItem extends React.Component {

    constructor(props){
        super(props);
       // this.state.liked = false;
    }
    componentWillMount(props){

        console.log("this is the feed page  componentWillMount....." );
        console.log(this.props.type);
        //this.props.getFeed({"_id":"59b7a4dd394bb461e38e56b2","feed":this.props.type});
    }

    showUserProfile(){
        //this.props.showUserProfile({"_id":this.props.article.author.authorId, "name":this.props.article.author.authorName});
        history.push('/userprofile/'+this.props.article.author.authorId);
    }

    handleLike() {
        this.props.handleLikes(this.props.article._id);
    }

    isLiked(){
        return this.props.isArticleLiked(this.props.article._id);
    }

    showArticle(){
        history.push('/article/'+this.props.article._id);
    }




    render() {
        return (
            <div className="panel panel-default article-item">
                <div className="panel-heading">
                <div className ="username" >
                     {this.props.isUserLoggedIn ? <button className="btn-green" onClick = {this.handleLike.bind(this)} > {this.isLiked()?"unlike":"like"} {this.props.article.likes}</button>:null}
                    <span onClick = {this.showUserProfile.bind(this)}>{ this.props.article.author.authorName }</span></div>
                    <span><small> {(new Date(this.props.article.time)).toUTCString()}</small> </span>

                </div>
                <div className="panel-body">
                    <div className = "article-title" onClick = {this.showArticle.bind(this)}><h4>{ this.props.article.title }</h4></div>
                    {this.props.article.content}

                </div>
            </div>
        );
    }
}


export default ArticleItem;
