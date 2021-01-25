import React, {useState, useEffect } from 'react'
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
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs';
import {Sqlite} from '@styled-icons/simple-icons/Sqlite';
import GitHubIcon from '@material-ui/icons/GitHub';
import {LinkExternal} from '@styled-icons/boxicons-regular/LinkExternal';

interface Props {
    name?: string,
    url?: string,
    url2?: string
}

const Card: React.FC<Props> = ({name, url, url2}) => {
    const [desc, setDesc] = useState(null);
    const [cardname, setCardname] = useState(null);

    useEffect(() => {
        if(cardname === null){
            getCardname(name)
        }
        if(desc === null){
            getDesc(name)
        }
    })

    function getCardname(name) {
        if(name === "mysite") setCardname("My Site");
        if(name === "dinodiner") setCardname("Dino Diner");
        if(name === "ksfarm") setCardname("Kansas Farmers Market Layout");
        if(name === "spotifysent") setCardname("Spotify Sentiment Analysis");
        if(name === "tictactoe") setCardname("Ultimate Tic-Tac-Toe");
        if(name === "cs4ks") setCardname("Computer Science for Kansas Website");
    }

    function getDesc(name) {
        if(name === "mysite") setDesc("The first iteration of my personal site. Creating this site has taught me a lot about styling and how to make a nice looking responsive site.");
        if(name === "dinodiner") setDesc("Dino Diner is an object oriented restaurant designed in CIS 400 at Kansas State University.");
        if(name === "ksfarm") setDesc("Website layout designed in Angular for CIS 642 at Kansas State University.");
        if(name === "spotifysent") setDesc("CURRENTLY UNDER CONSTRUCTION.");
        if(name === "tictactoe") setDesc("Ultimate Tic-Tac-Toe was designed using C# in CIS 300 at Kansas State University.");
        if(name === "cs4ks") setDesc("First site I created in CIS 526 in Kansas State University.");
    }

    function getIcons(name) {
        if(name === "mysite") {
            return (
                <div>
                    <ReactLogo style={{width:'25px', height:'25px'}}/>
                    <Typescript style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Html5 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Css3 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                </div>
            );
        }
        if(name === "dinodiner") {
            return (
                <div>
                    <Csharp style={{width:'25px', height:'25px'}}/>
                </div>
            );
        }
        if(name === "ksfarm") {
            return (
                <div>
                    <Angular style={{width:'25px', height:'25px'}}/>
                    <Typescript style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Html5 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Css3 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                </div>
            );
        }
        if(name === "spotifysent") {
            return (
                <div>
                    <ReactLogo style={{width:'25px', height:'25px'}}/>
                    <Javascript style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Html5 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Css3 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Python style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Django style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Postgresql style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                </div>
            );
        }
        if(name === "tictactoe") {
            return (
                <div>
                    <Csharp style={{width:'25px', height:'25px'}}/>
                </div>
            );
        }
        if(name === "cs4ks") {
            return (
                <div>
                    <Nodejs style={{width:'25px', height:'25px'}}/>
                    <Javascript style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Html5 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Css3 style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                    <Sqlite style={{width:'25px', height:'25px', marginLeft: '5px'}}/>
                </div>
            );
        }
    }

    return (
        <div className="cardcontainer">
            <div className="cardinner">
                <div className="cardtitle">{cardname}
                <div className="carddesc">{desc}</div>
                
                </div>
                
                <div className="cardtech">{getIcons(name)}</div>
                <footer className="cardfooter">
                    {url2 !== "" ? <LinkExternal onClick={event =>  window.location.href=url2} style={{width:'25px', height:'25px', color: '#66FCF1', cursor: 'pointer'}}/> : null}
                    <GitHubIcon onClick={event =>  window.location.href=url} style={{width:'25px', height:'25px', color: '#66FCF1', marginLeft: '5px', cursor: 'pointer'}}/>
                </footer>
            </div>
        </div>
    )
}

export default Card
