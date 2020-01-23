import React, {Component} from "react";


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
        return <div className="row">
            <div className="col-12">
                <div className="header">
                    {this.state.pageTitle}
                </div>
                <div className="box">
                    <div className="box-head">
                        <div className="box-head-label">
                            'Post new article'
                        </div>
                    </div>
                    <div className="box-body">
                        Title:
                        Text:
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Articles;