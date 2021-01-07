import React, { useRef } from 'react';
import NavigationBar from '../Components/NavigationBar';
import { motion, useCycle } from 'framer-motion';
import '../StyleSheets/Contact.css';
import { useDimensions } from '../dimensions';
import Particle from '../Components/Particle';
import MenuToggle from '../Components/MenuToggle';
import { Link } from 'react-router-dom';
import ContactTag from '../Components/ContactTag';
import Austin from './AustinHessNotLooking.jpg'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FaceBookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    clickableIcon: {
        '&:hover': {
            scale: 1.1,
        },
        color: '#45A29E',
        zIndex: 99999,
        width: "100px",
        height: "100px",
        justifyItems: "center",
        '@media (max-width: 1024px)' : {
            width: "50px",
            height: "50px"
        }
    },
});

const pageVariants = {
    initial: {
        opacity: 0,
        y: "100vh",
        scale: 0.8
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: "100vh",
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

const Contact: React.FC = () => {
    const styles = useStyles();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="startcontainer">
                <Particle />
                <motion.nav initial={false} custom={height} animate={isOpen ? "open" : "closed"} ref={containerRef}>
                    <motion.div className="background" variants={sidebar}/>
                    <NavigationBar/>
                    <MenuToggle toggle={() => toggleOpen()}/>
                </motion.nav>

                <Link style={{right: "10px", position: "fixed", fontSize:"25px", color:"#66FCF1", textDecoration:"none", padding:"10px"}} to="/">Austin</Link>
                <div className="aboutcontainer">
                <h1>Contact me</h1>
                <div className="desca">
                    I'm interested in everything computer science, especially web development. So
                    feel free to contact me using the icons below! 
                    <br/>
                    <br/>
                    <EmailIcon onClick={event =>  window.location.href="mailto:ahess@ksu.edu"} className={styles.clickableIcon}/>
                    <GitHubIcon onClick={event =>  window.location.href='https://github.com/ahess1999'} className={styles.clickableIcon}/>
                    <FaceBookIcon onClick={event =>  window.location.href='https://www.facebook.com/austin.hess.507'} className={styles.clickableIcon}/>
                </div>
                    
                <img id='aboutimagehands' src={Austin} alt={Austin}></img>
            </div> 
            </div>

            <div className="contactcont">
                <ContactTag/>
            </div>
        </motion.div>
    )
}

export default Contact;