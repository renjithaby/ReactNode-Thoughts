/**
 * Created by rabby
 * Component that handles the Adding of new article
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './NewPost.css';

class NewPostPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title :"",
            content :"",
            titleValid :{message:"(minimum 3 characters required)",status:"default"},
            contentValid:{message:"(minimum 3 characters required)",status:"default"},
            formValid :false
        };
    }


    handleTitleChange(event) {
        this.setState({title : event.target.value},this.validator);
    }

    handleContentChange(event) {
        this.setState({content : event.target.value},this.validator);
    }

    addNewArticle(event) {
        event.preventDefault();
        this.props.addNewArticle({title:this.state.title,content: this.state.content, authorId :this.props.currentUser._id, author:{ authorId :this.props.currentUser._id, authorName:this.props.currentUser.username}});
        return false;
    }

    validator(){
        let formValid = true;
        // title min 3 character
        if(this.state.title.length<3){
            this.setState({titleValid :{...this.state.titleValid , status: false}});
            formValid = false;
        }else{
            this.setState({titleValid :{...this.state.titleValid , status: true}});
        }
        // content min 3 character
        if(this.state.content.length<3){
            this.setState({contentValid :{...this.state.contentValid , status: false}});
            formValid = false;
        }else{
            this.setState({contentValid :{...this.state.contentValid , status: true}});
        }

        this.setState({formValid :formValid});
    }




render() {

        return (
            <div className ="new-post form-block ">
                <h4> New Article </h4>
                <form  onSubmit = {this.addNewArticle.bind(this)}>
                    <div className={!this.state.titleValid.status?"form-group has-error":"form-group"}>
                        <label> title  </label> <span>{!this.state.titleValid.status?this.state.titleValid.message:""} </span>
                        <input className="form-control"  value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
                    </div>

                    <div className= {!this.state.contentValid.status?"form-group has-error":"form-group"}>
                        <label> description  </label> <span>{!this.state.contentValid.status?this.state.contentValid.message:""} </span>
                        <textarea  className="form-control"  value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>


                    <input className="btn-green btn-submit" type="submit" value="Add Article" disabled ={!this.state.formValid} />
                </form>
            </div>
        );
    }
}


export default NewPostPage;
