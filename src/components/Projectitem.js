import React from 'react'
import "../styles/Projectitem.css";


const Projectitem = (props) => {
  return (
    <div className="Projectitem">
        <div className="Project_vid">
            <video controls loop >
                <source src={props.vid} type="video/mp4" />
            </video>
        </div>
        <div className="Project_desc">
            <h3>{props.Project_name}</h3>
            <p>{props.desc}</p>
            <button><a href={props.LinkText}>View Code</a></button>
        </div>
    </div>
  )
}

export default Projectitem