import React, { useState } from 'react';
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
    
    var [MenuClass, setMenuClass] = useState("navbar");



    const MenuControl = ()=>{
        
        if(MenuClass === "navbar"){
            setMenuClass("navbar responsive");
        }
        else{
            setMenuClass("navbar");
        }
         

    };

    return (
        <div className={MenuClass}>
            <a href="#Contact">Contact</a>
            <a href="#Projects">Projects</a>
            <a href="#About">About</a>
            <a href="#Homepage">Home</a>
            <a href="javascript:void(0);" className="icon" onClick={()=> MenuControl()}>
                <GiHamburgerMenu/>
            </a>
            
        </div>
    )
}

export default Navbar