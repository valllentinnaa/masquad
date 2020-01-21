import React, { Component } from "react";
// import Swiper from 'react-id-swiper';
//
// const FadeEffect = () => {
//     const params = {
//         spaceBetween: 30,
//         effect: 'fade',
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         }
//     }
// };
// https://react-id-swiper.ashernguyen.site/example/fade-effect



class Services extends Component {

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
                {

                },
                {

                },
                {

                }
            ]
        }
    }

    getTestimonialsItems = () => {
        return this.state.articles.map((testimonial, index) => {
            console.log(testimonial);
            return <div className="testimonial-wrapper">
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
        });
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
                <div className="row">
                    {/*<Swiper {...params}>*/}
                    {/*   <div>agd</div>*/}
                    {/*   <div>fgdf</div>*/}
                    {/*   <div>dfgds</div>*/}
                    {/*</Swiper>*/}
                </div>
            </div>
        </div>
    }
}

export default Services;