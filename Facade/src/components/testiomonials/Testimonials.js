import React, { Component } from "react";
import {Media} from "reactstrap";


class Services extends Component {

    constructor(props){
        super(props);
        this.state = {
            testimonialsTitle: 'Testimonials',
            testimonialsSubtitle: `Different people, similar opinions -`,
            testimonialsSubtitleKeyword: `WE ARE #1`,
        }
    }

    // getArticlesItems = () => {
    //     return this.state.articles.map((article, index) => {
    //         return <div key={index} className="col-4 article-wrapper">
    //             <Media object data-src={article.image} src={article.image} alt={article.title} className="services-icon"></Media>
    //             <div className="article-title">{article.title}</div>
    //             <div className="row">
    //                 <div className="col-md-2"></div>
    //                 <div className="col-md-8 article-description">{article.description}</div>
    //                 <div className="col-md-2"></div>
    //             </div>
    //         </div>
    //     });
    // };

    render() {
        return <div className="testimonials-wrapper">
            <div className="articles-heading">
                <div className="articles-title font-two">{this.state.testimonialsTitle}</div>
                <div className="articles-subtitle font-one-point-five">
                    {this.state.testimonialsSubtitle}
                    <span className="testimonials-subtitle-keywords text-uppercase"> {this.state.testimonialsSubtitleKeyword}</span>
                </div>
            </div>
            {/*<div className="services-body">*/}
            {/*    <div className="row">*/}
            {/*        {this.getArticlesItems()}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    }
}

export default Services;