/**
 * Created by rabby on 14/09/2017.
 */

import React from 'react';
import history from '../../History';

class UserProfileHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }


    handleFollow(){
        if(this.props.profileState.follow) {
            this.props.addFollowing();
        }else{
            this.props.removeFollowing();
        }
    }

    showUserProfile(){
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
