/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from './ArticleItem';



class FeedPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>

            <div className="container">
               <ul>
                    {this.props.feed.map((item) =>
                        <ArticleItem key ={item._id} article = {item}
                            isArticleLiked = {this.props.isArticleLiked.bind(this)}
                            handleLikes =   {this.props.handleLikes.bind(this)}
                            isUserLoggedIn = {this.props.isUserLoggedIn}
                        />
                    )}
                </ul>
            </div>
            </div>
         );
    }
}


export default FeedPage;
