import React from 'react'
import "../styles/Home.css";
import { motion } from "framer-motion"
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";



const Homepage = () => {
  return (
    
      <motion.div initial={{ opacity: 0 }}
    animate={{color:'white', opacity: 1 }}
    transition={{ duration: 1 }} id='Homepage' >
      
        <div id='Head_name' >Hi, I'm <span>Sarthak</span></div>
        <div id='Head_content' >I am a MERN stack developer and a Machine Learning Enthusiast</div>
        <div className="Socials">
          <ul className="Socials_list">
            <li className="Socials_Links"><a href="https://github.com/sarthak-star"><FiGithub /></a></li>
            <li className="Socials_Links"><a href="https://www.linkedin.com/in/sarthak-bathla-44494b202/"><BsLinkedin /></a></li>
            <li className="Socials_Links"><button><a href="https://drive.google.com/file/d/1zdhhPFtO1SD-pDZVKf-W2mBecbBs5zah/view?usp=drive_link">My Resume</a></button></li>
          </ul>
        
      </div>

      </motion.div>

      
    
  )
}

export default Homepage