/**
 * Created by rabby on 14/09/2017.
 */

import React from 'react';
import ArticleItem from './ArticleItem';
import history from './History';

class UserProfileHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

    }
    componentWillMount(props){
        console.log("component will mount...");

    }

    handleFollow(){
        if(this.props.profileState.follow) {
            console.log("clicked handle follow");
            this.props.addFollowing();
        }else{
             console.log("clicked handle  un follow");
            this.props.removeFollowing();
        }
    }

    showUserProfile(){
        //this.props.showUserProfile({"_id":this.props.article.author.authorId, "name":this.props.article.author.authorName});
        history.push('/userprofile/'+this.props.profileUser._id);
    }



    render() {
        return (
            <div className="jumbotron text-center">
                    <div  onClick = {this.showUserProfile.bind(this)} className="username"> <span>{this.props.profileUser.username}</span> </div>
                    {this.props.profileState.showFollow ? <div>
                    <button className="btn-green" onClick = {this.handleFollow.bind(this)} >{this.props.profileState.follow ?"+follow " :"+unfollow "+this.props.profileUser.username}  </button>
                    </div>:null}
             </div>

        );
    }
}


export default UserProfileHeader;
