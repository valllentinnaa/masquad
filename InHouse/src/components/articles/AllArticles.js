import React, {Component} from "react";


class AllArticles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'All articles',
        }
    }

    render() {
        return <>
            <div className="box-head">
                <div className="box-head-label text-black-50">
                    {this.state.pageTitle}
                </div>
            </div>
            <div className="box-body text-black-50">
                Title:
                Text:
            </div>
        </>
    }
}

export default AllArticles;