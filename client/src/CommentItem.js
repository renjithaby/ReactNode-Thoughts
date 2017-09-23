/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import history from './History';
class CommentItem extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){

    }

    removeComment(){
        this.props.removeComment(this.props.comment._id);
    }

    showUserProfile(){
        history.push('/userprofile/'+this.props.comment.user.userid);
    }



    render() {
        return (
            <div className="panel panel-default">

                <div className="panel-heading">
                    <div className="username" onClick = {this.showUserProfile.bind(this)}><span> {this.props.comment.user.username}</span> </div>
                { this.props.loggedInUser._id === this.props.comment.user.userid ?<i  onClick = {this.removeComment.bind(this)} className="bin-icon fa fa-trash-o" aria-hidden="true"></i>:null}
                    <span><small> {(new Date(this.props.comment.time)).toUTCString()}</small></span>
                </div>
                <div className="panel-body">
                    {this.props.comment.comment}
                </div>

            </div>
        );
    }
}


export default CommentItem;
