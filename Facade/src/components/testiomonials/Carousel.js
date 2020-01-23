import React from 'react';
import Swiper from 'react-id-swiper';
const Carousel = () => {
    const params = {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <Swiper {...params}>
            <div>Slide #1</div>
            <div>Slide #2</div>
            <div>Slide #3</div>
            <div>Slide #4</div>
            <div>Slide #5</div>
        </Swiper>
    )
};
export default Carousel

//https://react-id-swiper.ashernguyen.site/example/fade-effect