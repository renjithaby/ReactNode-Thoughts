/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import history from '../../History';
import './ArticleItem.css';

class ArticleItem extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){
    }

    showUserProfile(){
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
                    <div className = "article-title" ><span onClick = {this.showArticle.bind(this)}>{ this.props.article.title }</span></div>
                    {this.props.article.content}

                </div>
            </div>
        );
    }
}


export default ArticleItem;
