import React, { Component, useState } from "react";
import createCarousel from "./carousel/carousel";


class Services extends Component {

    componentDidMount() {
        createCarousel();
    }

    constructor(props){
        super(props);
        this.state = {
            testimonialsTitle: 'Testimonials',
            testimonialsSubtitle: `Different people, similar opinions -`,
            testimonialsSubtitleKeyword: `WE ARE #1`,
            testimonials: [
                {
                    image: 'http://www.myaffiliatesquad.com/img/casasapostas.jpg',
                    name: 'Jose',
                    text: ' - I am really impressed by the service provided by\n' +
                        '                        the team, they are always so helpful and fast to answer. In a few months my numbers had a really\n' +
                        '                        nice boost and I now I can see clearly what I was doing wrong before. It\'s amazing how can a\n' +
                        '                        few changes on your attitude towards marketing practices can produce such a huge impact on your\n' +
                        '                        income',
                    companyName: 'Casa de Apostas',
                    companyLink: 'https://casasdeapostas.info/'

                },
                {
                    image: 'http://www.myaffiliatesquad.com/img/casasapostas.jpg',
                    name: 'Jose',
                    text: ' - I am really impressed by the service provided by\n' +
                        '                        the team, they are always so helpful and fast to answer. In a few months my numbers had a really\n' +
                        '                        nice boost and I now I can see clearly what I was doing wrong before. It\'s amazing how can a\n' +
                        '                        few changes on your attitude towards marketing practices can produce such a huge impact on your\n' +
                        '                        income',
                    companyName: 'Casa de Apostas',
                    companyLink: 'https://casasdeapostas.info/'
                },
                {
                    image: 'http://www.myaffiliatesquad.com/img/casasapostas.jpg',
                    name: 'Jose',
                    text: ' - I am really impressed by the service provided by\n' +
                        '                        the team, they are always so helpful and fast to answer. In a few months my numbers had a really\n' +
                        '                        nice boost and I now I can see clearly what I was doing wrong before. It\'s amazing how can a\n' +
                        '                        few changes on your attitude towards marketing practices can produce such a huge impact on your\n' +
                        '                        income',
                    companyName: 'Casa de Apostas',
                    companyLink: 'https://casasdeapostas.info/'
                },
            ]
        }
    }

    getTestimonialsItems = () => {
        for(let i = 0; i < 5; i++) {
            return <div className="testimonials-item item">{`item ${i}`}</div>
        }

        /*return this.state.articles.map((testimonial, index) => {
            debugger
            return <div className="testimonial-wrapper item">
                <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.companyName}/>
                </div>
                <div className="testimonial-text">
                    <span className="testimonial-name">{testimonial.name}</span>
                    <span>{testimonial.text}</span>
                </div>
                <div className="apostrof"></div>
                <div className="testimonial-company">
                    <a href={testimonial.companyLink} target="_blank">{testimonial.companyName}</a>
                </div>
            </div>
        });*/
    };



    render() {
        return <div className="testimonials-wrapper">
            <div className="articles-heading">
                <div className="articles-title font-two">{this.state.testimonialsTitle}</div>
                <div className="articles-subtitle font-one-point-five">
                    {this.state.testimonialsSubtitle}
                    <span className="testimonials-subtitle-keywords text-uppercase"> {this.state.testimonialsSubtitleKeyword}</span>
                </div>
            </div>
            <div className="testimonials-body">
                <div className="row justify-content-center align-items-center">
                 <div className="prevBtn prev-btn h1">levo</div>
                 <div className="nextBtn next-btn h1">desno</div>
                    <div className="carousel-slide carouselSlide">
                        <div className="carousel-items-container">
                            {this.getTestimonialsItems()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Services;