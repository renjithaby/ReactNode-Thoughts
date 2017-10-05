/**
 * Created by rabby on 14/09/2017.
 */

import React from 'react';
import history from '../../History';

class ArticleDetailHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

    }

    showUserProfile(){
        history.push('/userprofile/'+this.props.article.author.authorId);
    }





    render() {
        return (
            <div className="jumbotron text-center">
                <h4>{this.props.article.title}</h4>

                <div>
                <div onClick = {this.showUserProfile.bind(this)} className="username"><span> {this.props.article.author.authorName}</span> </div>
                <span><small> {(new Date(this.props.article.time)).toUTCString()}</small></span>
                </div>

            </div>

        );
    }
}


export default ArticleDetailHeader;