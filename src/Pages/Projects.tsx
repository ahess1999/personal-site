import React, { useRef } from 'react';
import NavigationBar from '../Components/NavigationBar';
import { motion, useCycle } from 'framer-motion';
import Card from '../Components/Card';
import '../StyleSheets/Projects.css';
import { useDimensions } from '../dimensions';
import Particle from '../Components/Particle';
import MenuToggle from '../Components/MenuToggle';
import { Link } from 'react-router-dom';
import ContactTag from '../Components/ContactTag';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: -0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",
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

const Projects: React.FC = () => {
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

                <Link style={{right: 0, position: 'fixed', fontSize:"25px", color:"#66FCF1", textDecoration:"none", padding:"10px"}} to="/">Austin</Link>
                <div className="projcontainer">
                    <h1 className="ph1">Projects</h1>
                </div>
                
                <div className="projgrid">
                        <Card name="mysite"/>
                        <Card name="dinodiner" url="https://github.com/ahess1999/dino-diner"/>
                        <Card name="ksfarm" url="https://github.com/ahess1999/farmers-market-app"/>
                        <Card name="spotifysent"/>
                </div>
                
            </div>

            <div className="contactcont">
                <ContactTag/>
            </div>
        </motion.div>
    )
}

export default Projects;
