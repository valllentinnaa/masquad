import React, { Component } from "react";
import {Media} from "reactstrap";


class Services extends Component {

    constructor(props){
        super(props);
        this.state = {
            articlesTitle: 'Useful Articles',
            articlesSubtitle: `Take the EDGE of the iGambling industry`,
            articles: [
                {
                    image: 'http://www.myaffiliatesquad.com/img/cpa-fraud-index.jpg',
                    title: 'How to detect CPA abuse?',
                    description: 'We are going to show you how we are finding affiliates who are abusing the CPA commission. An important tutorial to protect wasting money from bad deals.'
                },
                {
                    image: 'http://www.myaffiliatesquad.com/img/mga-vs-curacao.jpg',
                    title: 'How to detect CPA abuse?',
                    description: 'We are going to show you how we are finding affiliates who are abusing the CPA commission. An important tutorial to protect wasting money from bad deals.'
                },
                {
                    image: 'http://www.myaffiliatesquad.com/img/cpa-fraud-index.jpg',
                    title: 'How to detect CPA abuse?',
                    description: 'We are going to show you how we are finding affiliates who are abusing the CPA commission. An important tutorial to protect wasting money from bad deals.'
                },
            ]
        }
    }

    getArticlesItems = () => {
        return this.state.articles.map((article, index) => {
            return <div key={index} className="col-4 article-wrapper">
                <Media object data-src={article.image} src={article.image} alt={article.title} className="services-icon"></Media>
                <div className="article-title">{article.title}</div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 article-description">{article.description}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row justify-content-center pt-4">
                    <button type="button" className="btn btn-outline-primary">Read more</button>
                </div>
            </div>
        });
    };

    render() {
        return <div className="articles-wrapper">
            <div className="articles-heading">
                <div className="articles-title font-two">{this.state.articlesTitle}</div>
                <div className="articles-subtitle font-one-point-five">
                    {this.state.articlesSubtitle}
                </div>
            </div>
            <div className="services-body">
                <div className="row">
                    {this.getArticlesItems()}
                </div>
            </div>
        </div>
    }
}

export default Services;