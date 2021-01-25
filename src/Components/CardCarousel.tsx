import React from 'react'
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import dino from '../StyleSheets/dinodiner.png';
import mysite from '../StyleSheets/mysite.png';
import ksfarm from '../StyleSheets/ksfarm.png';
import spotifysent from '../StyleSheets/spotifysent.png';
import tictac from '../StyleSheets/tictactoe.png';
import cs4ks from '../StyleSheets/cs4ks.png';

const CardCarousel: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div>
            <Slider {...settings}>
                <img className="carimg" alt="" src={mysite}/>
                <img className="carimg" alt="" src={dino}/>  
                <img className="carimg" alt="" src={ksfarm}/>
                <img className="carimg" alt="" src={spotifysent}/>
                <img className="carimg" alt="" src={tictac}/>
                <img className="carimg" alt="" src={cs4ks}/> 
            </Slider>
        </div>
    )
}

export default CardCarousel
