import React, { Component } from "react";
import {Media} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import SingleArticle from "./SingleArticle";


class Articles extends Component {

    constructor(props){
        super(props);
        this.state = {
            articlesTitle: 'Useful Articles',
            articlesSubtitle: `Take the EDGE of the iGambling industry`,
            limit: 3,
            toggleText: 'More',
            toggled: false
        };
        this.toggleLoad = this.toggleLoad.bind(this);
    }

    toggleLoad () {
        //If you press on 'More'
        if (this.state.toggled === false) {
            this.setState({
                limit: 10,
                toggleText: 'Less',
                toggled: !this.state.toggled
            });
        } else {
            //If you press on 'Less'
            this.setState({
                limit: 3,
                toggleText: 'More',
                toggle: !this.state.toggled
            });
        }
    }

    componentDidMount() {
        this.props.getArticles();
    }

    getArticlesItems = () => {
        if (this.props.articles.length) {
            return this.props.articles
                .slice(0, this.state.limit)
                .map((article) => {
                return <SingleArticle key={article._id} id={article._id} title={article.title} text={article.text}/>
            });
        } else {
            return <div className="p-3 text-info">No articles found!</div>
        }
    };

    render() {
        return <div className="articles-wrapper">
            <div className="articles-heading">
                <div className="articles-title font-two">{this.state.articlesTitle}</div>
                <div className="articles-subtitle font-one-point-five">
                    {this.state.articlesSubtitle}
                </div>
            </div>
            <div className="articles-body">
                <div className="row">
                    {this.getArticlesItems()}
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-block"
                        onClick={this.toggleLoad}
                    >
                        Load {this.state.toggleText}</button>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setArticles: actions.setArticles,
        getArticles: actions.getArticles
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Articles);