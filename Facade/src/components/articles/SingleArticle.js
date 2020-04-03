import React, { Component } from "react";
import {Media} from "reactstrap";


const SingleArticle = props => {
        return (
            <div key={props.id} className="col-4 article-wrapper">
                {/*TODO once I finish a real react course I guess*/}
                {/*https://www.youtube.com/watch?v=srPXMt1Q0nY*/}
                {/*<Media object data-src={props.image} src={props.image} alt={props.title} className="services-icon"></Media>*/}
                <div className="article-title">{props.title}</div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 article-description">{props.text}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row justify-content-center pt-4">
                    <button type="button" className="btn btn-outline-primary">Read more</button>
                </div>
            </div>
        )
};

export default SingleArticle;