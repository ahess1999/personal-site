import React, { useRef } from 'react'
import { motion, useCycle } from 'framer-motion';
import '../StyleSheets/Homepage.css';
import NavigationBar from '../Components/NavigationBar';
import { useDimensions } from '../dimensions';
import MenuToggle from '../Components/MenuToggle';
import { Link } from 'react-router-dom';
import ContactTag from '../Components/ContactTag';
import Particle from '../Components/Particle';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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

const Homepage: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div>
            
            <div className="startcontainer">
                <Particle/>
                <div className="navcontainer">
                    <motion.nav initial={false} custom={height} animate={isOpen ? "open" : "closed"} ref={containerRef}>
                        <motion.div className="background" variants={sidebar}/>
                        <NavigationBar/>
                        <MenuToggle toggle={() => toggleOpen()}/>
                    </motion.nav>
                </div>
                
                <a href="/" className="logobutton">Austin</a>

                <section id="Home" className="introcontainer">
                    <div className="hiintro">Hello, I'm</div>
                    <h1 className="head">Austin Hess</h1>
                    <h1 className="headtitle">Software Engineer</h1>
                    <div className="desc">Software engineer who currently resides in Manhattan, KS
                        <br/>
                        and is working towards his Bachelors degree in Computer Science
                        <br/>
                        at Kansas State University
                    </div>
                </section>
            <About/>
            <Projects/>
            <Contact/>
                <div className="contactcont">
                    <ContactTag/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
