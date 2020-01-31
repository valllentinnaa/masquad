import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";


class AllArticles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'All articles',
        }
    }

    componentDidMount() {
        this.props.getArticles();
    }

    deleteArticle = (id) => {
        this.props.removeArticle(id);
    };

    getArticlesList = () => {
        if (this.props.articles.length) {
            const articlesList = this.props.articles.map(article => {
                return <li key={article._id} className="col-md-4 pt-3">
                        <div className="single-article">
                            <div className="single-article-heading">
                                <span className="single-article-title">{article.title}</span>
                                <span className="single-article-actions" onClick={() => {this.deleteArticle(article._id)}}>
                                <i className="fa fa-trash-o"></i>
                            </span>
                            </div>
                            <div className="single-article-body p-3">
                                <div className="article-scroll">
                                    {article.text}
                                </div>
                            </div>
                        </div>
                    </li>
            });
            return articlesList;
        } else {
            return <div className="p-3 text-info">No articles found!</div>
        }
    };

    render() {
        return <>
            <div className="box-head">
                <div className="box-head-label text-black-50">
                    {this.state.pageTitle}
                </div>
            </div>
            <div className="box-body text-black-50">
                <ul className="row articles-list">
                    {this.getArticlesList()}
                </ul>
            </div>
        </>
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
        getArticles: actions.getArticles,
        removeArticle: actions.removeArticle
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(AllArticles);