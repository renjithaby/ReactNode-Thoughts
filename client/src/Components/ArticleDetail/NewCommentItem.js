/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './NewComment.css';


class NewCommentItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {content :"Write a new comment"};
    }

    componentWillReceiveProps(props){

    }


    handleContentChange(event) {
        this.setState({content : event.target.value});
    }

    addNewComment(event) {
        event.preventDefault();
        this.props.addNewComment( this.state.content);
        return false;
    }



    render() {

        return (
            <div className ="new-comment well">
            <div className ="form-block  add-comment">
            <form  onSubmit = {this.addNewComment.bind(this)}>

                <div className="form-group">
                    <textarea className="form-control"  value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                </div>

                <input className="btn-green" type="submit" value="Add Comment" />
                <div> </div>

            </form>
            </div>
            </div>

        );
    }
}


export default NewCommentItem;
