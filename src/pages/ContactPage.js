import React, { useState } from 'react';
import "../styles/Contact.css";


const ContactPage = () => {
  
  const [Email, setEmail] = useState("");
  
  const [Content, setContent] = useState("");

  const HandleChange = (e) =>{
    if( e.target.name === "Email"){
      setEmail(e.target.value);
    }
    
    if(e.target.name === "Content"){
      setContent(e.target.value);
    }
  }




  return (
    <div id="Contact">
      <div className="Contact_head">
        <p>Connect with me</p>
      </div>
      <div className="Contact_intro">
        <p>I'm always happy to connect and learn new things! You can reach out to me by filling out the form below</p>
      </div>
      <div className="Contact_form">
        <form action="https://getform.io/f/b47c5986-f035-4696-8e26-78f6c1596f58" method="post">
        <input type='email' name='Email' placeholder='Enter your Email' required value={Email} onChange={HandleChange} />
        
        <input type='text'  name='Content'  placeholder='Topic of interest' required value={Content} onChange={HandleChange} />
        
        
        <button type='submit' >Send</button>
        
        </form>
        
      </div>
    </div>
  )
}

export default ContactPage