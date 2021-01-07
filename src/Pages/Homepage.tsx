import React from 'react';
import '../StyleSheets/Homepage.css';
import Austin from './AustinHess.jpg'
import NavigationBar from '../Components/NavigationBar';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: "-100vh",
        scale: 0.8
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: "-100vh",
        scale: 1.2
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
}

const Homepage: React.FC = () => {
    return (
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
            <div className="aboutcontainer">
                
                <div className='textgrid'>
                    <p className='abouttext'>AUSTIN HESS</p>
                </div>
                <div className='aboutgrid'>
                    <img id='aboutimage' src={Austin} alt={Austin}></img>
                    <p className='description'>Software Developer</p>
                </div>
            </div>
        </motion.div>
    )
}


export default Homepage;