import React, { useRef } from 'react';
import NavigationBar from '../Components/NavigationBar';
import { motion, useCycle } from 'framer-motion';
import '../StyleSheets/About.css';
import { useDimensions } from '../dimensions';
import MenuToggle from '../Components/MenuToggle';
import Particle from '../Components/Particle';
import { Link } from 'react-router-dom';
import ContactTag from '../Components/ContactTag';
import Austin from './AustinHessHands.jpg';
import {Csharp} from '@styled-icons/simple-icons/Csharp';
import {Css3} from '@styled-icons/boxicons-logos/Css3';
import {Html5} from '@styled-icons/boxicons-logos/Html5';
import {Java} from '@styled-icons/simple-icons/Java';
import {Javascript} from '@styled-icons/boxicons-logos/Javascript';
import {Mysql} from '@styled-icons/simple-icons/Mysql';
import {Python} from '@styled-icons/simple-icons/Python';
import {Typescript} from '@styled-icons/simple-icons/Typescript';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
}

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


const About: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="startcontainer">
                <Particle/>
                <motion.nav initial={false} custom={height} animate={isOpen ? "open" : "closed"} ref={containerRef}>
                    <motion.div className="background" variants={sidebar}/>
                    <NavigationBar/>
                    <MenuToggle toggle={() => toggleOpen()}/>
                </motion.nav>

                <Link style={{right: "10px", position: 'fixed', fontSize:"25px", color:"#66FCF1", textDecoration:"none", padding:"10px"}} to="/">Austin</Link>
            <div className="aboutcontainer">
                <h1>About me</h1>
                <div className="desca">
                    Aspiring Software Engineer currently enrolled at Kansas State University
                    pursuing a degree in Computer Science. I've been programming for 3 years and 
                    I'm constantly trying to learn something new everyday.
                    <br/>
                    <br/>
                    I'm a hard-working, well-organized individual who shows attention to every detail.
                    <br/> Big NBA fan and everything basketball, getting outside and enjoying life!
                    <br/>
                    <br/>
                    I'm interested in just about anything programming related. I have experience in web development 
                    as well as developing software that not only looks good, but is highly functional too.
                    
                    
                </div>
                <img id='aboutimagehands' src={Austin} alt={Austin}></img>
                <div className="languages">Languages
                    <div className="langgrid">
                        <Csharp style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Css3 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Html5 style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Java style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Javascript style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Mysql style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Python style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                        <Typescript style={{width:'40px', height:'40px', paddingTop:'10px'}}/>
                    </div>
                 </div>
            </div> 

            <div className="contactcont">
                <ContactTag/>
            </div>
            </div>
        </motion.div>
    )
}

export default About;