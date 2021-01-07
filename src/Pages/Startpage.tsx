import React, { useRef } from 'react'
import { motion, useCycle } from 'framer-motion';
import '../StyleSheets/Startpage.css';
import NavigationBar from '../Components/NavigationBar';
import { useDimensions } from '../dimensions';
import MenuToggle from '../Components/MenuToggle';
import { Link } from 'react-router-dom';
import ContactTag from '../Components/ContactTag';
import Particle from '../Components/Particle';
import Austin from './AustinHess.jpg'

const pageVariants = {
    initial: {
        opacity: 0,
        y: "-100vh",
        scale: 0.8
    },
    in: {
        opacity: 1,
        y: 0.5,
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
      },
    }
  };

const Startpage: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
            
            <div className="startcontainer">
                <Particle/>
                <motion.nav initial={false} custom={height} animate={isOpen ? "open" : "closed"} ref={containerRef}>
                    <motion.div className="background" variants={sidebar}/>
                    <NavigationBar/>
                    <MenuToggle toggle={() => toggleOpen()}/>
                </motion.nav>
                
                <Link style={{right: 0, position: 'fixed', fontSize:"25px", color:"#66FCF1", textDecoration:"none", padding:"10px"}} to="/">Austin</Link>

                <div className="introcontainer">
                    <div className="hiintro">Hello, I'm</div>
                    <h1>Austin Hess</h1>
                    <img id='aboutimage' src={Austin} alt={Austin}></img>
                    <h2>Software Engineer</h2>
                    <div className="desc">Software engineer who currently resides in Manhattan, KS
                        <br/>
                        and is working towards his Bachelors degree in Computer Science
                        <br/>
                        at Kansas State University
                    </div>
                </div>
                
                <div className="contactcont">
                    <ContactTag/>
                </div>
            </div>
        </motion.div>
    )
}

export default Startpage
