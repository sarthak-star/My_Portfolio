import React from 'react'
import "../styles/Home.css";
import { motion } from "framer-motion"
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";



const Homepage = () => {
  return (
    
      <div id='Homepage' >
        <motion.div initial={{ opacity: 0 ,x : 40 }}
    animate={{color:'white', opacity: 1,x:0  }}
    transition={{ duration: 1.5 }}>
        <div id='Head_name' >Hi, I'm <span>Sarthak</span></div>
        <div id='Head_content' >I am a MERN stack developer and a Machine Learning Enthusiast</div>
        <div className="Socials">
          <ul className="Socials_list">
            <li className="Socials_Links"><a href="https://github.com/sarthak-star"><FiGithub /></a></li>
            <li className="Socials_Links"><a href="https://www.linkedin.com/in/sarthak-bathla-44494b202/"><BsLinkedin /></a></li>
            <li className="Socials_Links"><button><a href="https://drive.google.com/file/d/17pewpdY9qBD5R9ZLSkZITZzo5sDogW7P/view?usp=drive_link">My Resume</a></button></li>
          </ul>
        
      </div>
      </motion.div>

      </div>

      
    
  )
}

export default Homepage
