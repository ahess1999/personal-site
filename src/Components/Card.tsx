import React, {useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import dino from '../StyleSheets/dinodiner.png';
import mysite from '../StyleSheets/mysite.png';
import ksfarm from '../StyleSheets/ksfarm.png';
import spotifysent from '../StyleSheets/spotifysent.png';
import '../StyleSheets/Card.css'
import {Csharp} from '@styled-icons/simple-icons/Csharp';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Typescript} from '@styled-icons/simple-icons/Typescript';
import {ReactLogo} from '@styled-icons/fa-brands/ReactLogo';
import {Angular} from '@styled-icons/fa-brands/Angular';
import {Python} from '@styled-icons/simple-icons/Python';
import {Postgresql} from '@styled-icons/simple-icons/Postgresql';
import {Django} from '@styled-icons/simple-icons/Django';
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';

interface Props {
    name?: string,
    url?: string,
}

const Card: React.FC<Props> = ({name, url}) => {
    const [image, setImage] = useState(null);
    const [desc, setDesc] = useState(null);
    const [cardname, setCardname] = useState(null);

    useEffect(() => {
        if(image === null){
            getImage(name)
        }
        if(cardname === null){
            getCardname(name)
        }
        if(desc === null){
            getDesc(name)
        }
    })

    function getImage(name) {
        if(name === "mysite") setImage(mysite);
        if(name === "dinodiner") setImage(dino);
        if(name === "ksfarm") setImage(ksfarm);
        if(name === "spotifysent") setImage(spotifysent);
    }

    function getCardname(name) {
        if(name === "mysite") setCardname("My Site");
        if(name === "dinodiner") setCardname("Dino Diner");
        if(name === "ksfarm") setCardname("Kansas Farmers Market Layout");
        if(name === "spotifysent") setCardname("Spotify Sentiment Analysis");
    }

    function getDesc(name) {
        if(name === "mysite") setDesc("The site you are currently on.");
        if(name === "dinodiner") setDesc("Dino Diner is an object oriented restaurant designed in CIS 400 at Kansas State University.");
        if(name === "ksfarm") setDesc("Website layout designed in Angular for CIS 642 at Kansas State University.");
        if(name === "spotifysent") setDesc("CURRENTLY UNDER CONSTRUCTION.");
    }

    function getIcons(name) {
        if(name === "mysite") {
            return (
                <div>
                    <ReactLogo style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Typescript style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Html5 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Css3 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                </div>
            );
        }
        if(name === "dinodiner") {
            return (
                <div>
                    <Csharp style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                </div>
            );
        }
        if(name === "ksfarm") {
            return (
                <div>
                    <Angular style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Typescript style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Html5 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Css3 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                </div>
            );
        }
        if(name === "spotifysent") {
            return (
                <div>
                    <ReactLogo style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Javascript style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Html5 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Css3 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Python style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Django style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    <Postgresql style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                </div>
            );
        }
    }

    return (
        <motion.div className="cardcontainer" whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} onClick={event =>  window.location.href=url}>
            <img id="cardimage" src={image} alt={image}></img>
            <div className="cardiden">
            {cardname}
            <br/>
            <div id="carddesc">{desc}</div>
            <div id="cicon">{getIcons(name)}</div>
            </div>
        </motion.div>
    )
}

export default Card
