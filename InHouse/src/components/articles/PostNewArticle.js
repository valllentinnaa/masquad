import React, {Component} from "react";
import {Button} from 'reactstrap';
import $ from "jquery";


class PostNewArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

//TODO get the form data
    handleInputChange(event) {
        debugger
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return <>
            <div className="box-head">
                <div className="box-head-label text-black-50">
                    Post New Article
                </div>
            </div>
            <div className="box-body text-black-50">
                <form action="" id="newArticle">
                    <div className="form-group">
                        <label htmlFor="post-title">Article title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="post-title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-text">Article text</label>
                        <textarea
                            className="form-control"
                            id="post-text"
                            rows="10"
                            name="text"
                            value={this.state.text}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div className="box-foot d-flex justify-content-end align-items-center">
                <div className="foot-actions">
                    <Button
                        type="submit"
                        color="action"
                        className="post-article-btn text-white"
                        onClick={this.handleSubmit}
                    >Post article</Button>
                </div>
            </div>
        </>
    }
}

export default PostNewArticle;