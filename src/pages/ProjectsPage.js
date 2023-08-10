import React from 'react';
import "../styles/Project.css";
import Projectitem from '../components/Projectitem';
import  Hotstar_vid  from "../assets/Hotstar_vid.mp4"; 
import MusiQ_vid from "../assets/MusiQ_vid.mp4";
import News_vid from "../assets/News_vid.mp4";
import ChatFlix_vid from "../assets/ChatFlix_vid.mp4";
import { motion } from "framer-motion";

const Projectspage = () => {
  
  const Hotstar_Clone_Git_Url = "https://github.com/sarthak-star/hotstar-clone";
  const News_Application_Git_Url = "https://github.com/sarthak-star/DailySamachaar-Newsapplication";
  const Music_Player_Git_Url = "https://github.com/sarthak-star/MusicQ-musicplayer";
  const Chat_Application_Git_Url = "https://github.com/sarthak-star/ChatFlix_MERN-Chat-Application";
  



  return (
    <div id="Projects">
      <motion.div initial={{ opacity: 0 ,y : 40 }}
    animate={{color:'white', opacity: 1,y:0  }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 1.5 }}
    >
      <div className="Projects_head"><p>Projects</p></div>
      <div className="Projects_Intro"><p>Here you will find some of the personal projects that I created.To see all my projects, please visit my github account.</p></div>
      </motion.div>
      <div className="Projects_content">
        <Projectitem Project_name="Hotstar Clone" LinkText={Hotstar_Clone_Git_Url} vid={Hotstar_vid} desc="I've designed a captivating frontend replica of Hotstar using HTML, CSS, and JavaScript. It mirrors the original platform's interface, engaging users with a wide array of content." />
        <Projectitem Project_name="Music Player" LinkText={Music_Player_Git_Url} vid={MusiQ_vid} desc="I have developed an advanced music player utilizing React and the Spotify API, granting users the ability to log in with their Spotify ID and access their personalized playlists and tracks directly from Spotify's vast library." />
        <Projectitem Project_name="News Application" LinkText={News_Application_Git_Url} vid={News_vid} desc="I have successfully developed a news application using React and NewsAPI, delivering fresh and up-to-date news every day." />
        <Projectitem Project_name="Chat Application" LinkText={Chat_Application_Git_Url} vid={ChatFlix_vid} desc="I have successfully developed a real-time chat application using the MERN stack, socket.io, and Chakra UI. The application comes equipped with user authentication and authorization features, powerful CRUD operations and a friendly and beautiful user interface"/>

      </div>
    </div>
  )
}

export default Projectspage