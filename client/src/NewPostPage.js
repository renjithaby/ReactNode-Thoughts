/**
 * Created by rabby on 06/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';


class NewPostPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {title :"title", content :"description"};
    }

    componentWillReceiveProps(props){

    }


    handleTitleChange(event) {
        this.setState({title : event.target.value});
    }

    handleContentChange(event) {
        this.setState({content : event.target.value});
    }

    addNewArticle(event) {
        event.preventDefault();
        //alert('A name was submitted: ' + this.state.username);

        this.props.addNewArticle({title:this.state.title,content: this.state.content, authorId :this.props.currentUser._id, author:{ authorId :this.props.currentUser._id, authorName:this.props.currentUser.username}});
        return false;
    }



    render() {

        return (
            <div className =" form-block ">
                <h1> New Article </h1>
                <form  onSubmit = {this.addNewArticle.bind(this)}>
                    <div className="form-group">
                        <label> title </label>
                        <input className="form-control"  value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> description </label>
                        <textarea className="form-control"  value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>


                    <input className="btn-green" type="submit" value="Add Article" />
                </form>
            </div>
        );
    }
}


export default NewPostPage;
