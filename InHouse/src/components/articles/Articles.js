import React, {Component} from "react";
import AllArticles from './AllArticles';
import PostNewArticle from './PostNewArticle';


class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Articles',
            boxes: [
                {
                    title: 'Post new article'
                }
            ]
        }
    }

    render() {
        return <>
            <div className="row">
                <div className="col-12">
                    <div className="header-title">
                        {this.state.pageTitle}
                    </div>
                </div>
            </div>
            <div className="container-max row">
                <div className="col-12">
                    <div className="box">
                        <AllArticles/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="box">
                        <PostNewArticle/>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Articles;