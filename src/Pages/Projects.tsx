import React from 'react';
import Card from '../Components/Card';
import '../StyleSheets/Projects.css';
import Particle from '../Components/Particle';

const Projects: React.FC = () => {
    
    return (
        <div>
            <Particle/>
            <div className="projcontainer">
                    <h1 id="Projects" className="ph1">My work</h1>
                    <div className="carouselcont">
                        <Card name="mysite" url="https://github.com/ahess1999/personal-site" url2=""/>
                        <Card name="dinodiner" url="https://github.com/ahess1999/dino-diner" url2=""/>
                        <Card name="ksfarm" url="https://github.com/ahess1999/farmers-market-app" url2=""/>
                        <Card name="cs4ks" url="https://github.com/ahess1999/cs4ks" url2="https://cs4ks.herokuapp.com/"/>
                        <Card name="tictactoe" url="https://github.com/ahess1999/ultimate-tic-tac-toe" url2=""/>
                        <Card name="spotifysent" url="https://github.com/ahess1999/spotify-sentiment-analysis" url2=""/>
                    </div>
            </div>
        </div>
    )
}

export default Projects;
