import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleSheets/NavigationBar.css';
import MenuItem from './MenuItem';

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    }
  };


const NavigationBar: React.FC = () => {

    const navs = ["Home", "About", "Projects", "Contact"]

    return (
          <motion.ul variants={variants}>
          {navs.map(i => (
            <MenuItem i={i} key={i}/>
          ))}
        </motion.ul>
    )
}


export default NavigationBar;