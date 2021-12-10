import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
//import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';
import '../StyleSheets/MenuItem.css';

const useStyles = makeStyles({ 
  clickableIcon: {
    '&:hover': {
        scale: 1.1,
    },
    color: '#C5C6C7',
},
});

const variants = {
  open: {
    x: 0,
    y: 15,
    opacity: 1,
    scale: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
  },
  closed: {
    x: -80,
    y: 15,
    opacity: 0,
    scale: 0,
    transition: {
      y: { stiffness: 1000 }
    },
  }
};


const MenuItem = ({ i }) => {
  const styles = useStyles();

  const [icon, setIcon] = useState(null);

  const [link, setLink] = useState("");



  useEffect(() => {
    if(icon === null) {
      selectIcon(i);
    }
  })

  function selectIcon(i) {
    if(i === "Home") {
      setIcon(<HomeIcon className={styles.clickableIcon}/>)
      setLink("Home")
    } 
    if(i === "About") {
      setIcon(<InfoIcon className={styles.clickableIcon}/>)
      setLink("About")
    } 
    if(i === "Projects") {
      setIcon(<CreateIcon className={styles.clickableIcon}/>)
      setLink("Projects")
    } 
    if(i === "Contact") {
      setIcon(<PersonIcon className={styles.clickableIcon}/>)
      setLink("Contact")
    } 
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      
      <Link style={{textDecoration: 'none'}} to={link} spy={true} smooth={true} duration={500}><div className="icon-placeholder">{icon}</div></Link>
      <Link style={{textDecoration: 'none'}} to={link} spy={true} smooth={true} duration={500}><div className="text-placeholder">{i}</div></Link>
    </motion.li>
  );
};

export default MenuItem;