import React from 'react';
import "../styles/About.css";
import HTML_logo from "../assets/HTML_logo.png";
import CSS_logo from "../assets/CSS_logo.png";
import JS_logo from "../assets/JS_logo.png";
import Node_logo from "../assets/Node_logo.png";
import React_logo from "../assets/React_logo.png";
import Mongo_logo from "../assets/Mongo_logo.png";
import Python_logo from "../assets/Python_logo.png";
import Cpp_logo from "../assets/Cpp_logo.png";
import Scikit_logo from "../assets/Scikit_logo.png";
import SQL_logo from "../assets/SQL_logo.png";
import { motion } from "framer-motion";

const Aboutpage = () => {
  return (
    
      
        <motion.div initial={{ opacity: 0 }}
    animate={{color:'white', opacity: 1 }}
    transition={{ duration: 1 }} id='About' >
      <div className="About_head">
        <p>About Me</p>
      </div>
      <div className="About_intro">
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
      </div>
      <div className="About_content">
        <div className="About_content_left">
          <h1>Get to know me!</h1>
          <p>Hello, I'm Sarthak, a passionate and dedicated <span>web developer</span> and an <span>Open Source Contributor</span> with a strong commitment to crafting exceptional digital experiences.I thrive on turning ideas into innovative and functional websites that leave a lasting impression.What sets me apart is my meticulous attention to detail and a keen eye for design. I believe that great websites not only function flawlessly but also engage users with captivating visuals. By combining my technical expertise with a <span>strong sense of aesthetics</span>, I strive to create user-friendly interfaces that not only meet client requirements but exceed expectations.</p>
          <button><a href="#Contact">Connect</a></button>
        </div>
        
        <div className="About_content_right">
          <span style={{'--i':'1'}} ><img src={HTML_logo} alt="" /></span>
          <span style={{'--i':'2'}} ><img src={CSS_logo} alt="" /></span>
          <span style={{'--i':'3'}} ><img src={JS_logo} alt="" /></span>
          <span style={{'--i':'4'}} ><img src={Node_logo} alt="" /></span>
          <span style={{'--i':'5'}} ><img src={React_logo} alt="" /></span>
          <span style={{'--i':'6'}} ><img src={Mongo_logo} alt="" /></span>
          <span style={{'--i':'7'}} ><img src={Python_logo} alt="" /></span>
          <span style={{'--i':'8'}} ><img src={Cpp_logo} alt="" /></span>
          <span style={{'--i':'9'}} ><img src={Scikit_logo} alt="" /></span>
          <span style={{'--i':'10'}} ><img src={SQL_logo} alt="" /></span>
        </div>
        

      </div>
      </motion.div>
    

    
    
  )
}

export default Aboutpage