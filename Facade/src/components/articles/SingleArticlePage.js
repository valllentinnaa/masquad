import React, {Component, useEffect, useState} from "react";
import {Media} from "reactstrap";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class SingleArticle extends Component {

    componentDidMount() {
        const articleId = this.props.match.params.articleId;
        this.props.getArticle(articleId);
    };

    render() {
        return (
            <div key={this.props.article._id} className="col-12 article-wrapper">
                {/*<Media object data-src={props.image} src={props.image} alt={props.title} className="services-icon"></Media>*/}
                <div className="article-page-title">{this.props.article.title}</div>
                <div className="row">
                    <h1 className="col-md-2"></h1>
                    <p className="col-md-8 article-page-description">{this.props.article.text}</p>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        article: state.article
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setArticle: actions.setArticle,
        getArticle: actions.getArticle
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(SingleArticle));