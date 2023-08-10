import React, { useState } from 'react';
import "../styles/Contact.css";


const ContactPage = () => {

  const [Email, setEmail] = useState("");

  const [Content, setContent] = useState("");

  const HandleChange = (e) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "Content") {
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

          <input type='text' name='Content' placeholder='Topic of interest' required value={Content} onChange={HandleChange} />


          <button type='submit' >Send</button>

        </form>

      </div>
      

      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150" style={{ userSelect: "auto" }}>
    <defs>
        <linearGradient id="gradient" x1="4%" y1="30%" x2="96%" y2="70%">
            <stop offset="5%" stopColor="#574ae2"></stop>
            <stop offset="95%" stopColor="#9900ef"></stop>
        </linearGradient>
    </defs>
    <path
        d="M 0,400 C 0,400 0,133 0,133 C 114.09569377990434,144.6937799043062 228.19138755980867,156.38755980861245 321,149 C 413.8086124401913,141.61244019138755 485.33014354066984,115.14354066985646 567,110 C 648.6698564593302,104.85645933014354 740.4880382775119,121.03827751196172 852,117 C 963.5119617224881,112.96172248803828 1094.7177033492821,88.70334928229666 1196,88 C 1297.2822966507179,87.29665071770334 1368.641148325359,110.14832535885168 1440,133 C 1440,133 1440,400 1440,400 Z"
        stroke="none" strokeWidth="0"
        fill="url(#gradient)" fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
        style={{ userSelect: "auto" }}
    >
    </path>

    <defs>
        <linearGradient id="gradient" x1="4%" y1="30%" x2="96%" y2="70%">
            <stop offset="5%" stopColor="#574ae2"></stop>
            <stop offset="95%" stopColor="#9900ef"></stop>
        </linearGradient>
    </defs>
    <path
        d="M 0,400 C 0,400 0,266 0,266 C 96.35406698564591,273.64593301435406 192.70813397129183,281.2918660287081 290,271 C 387.29186602870817,260.7081339712919 485.52153110047846,232.47846889952154 573,244 C 660.4784688995215,255.52153110047846 737.2057416267942,306.79425837320576 839,312 C 940.7942583732058,317.20574162679424 1067.6555023923447,276.3444976076555 1172,261 C 1276.3444976076553,245.6555023923445 1358.1722488038276,255.82775119617224 1440,266 C 1440,266 1440,400 1440,400 Z"
        stroke="none" strokeWidth="0"
        fill="url(#gradient)" fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
        style={{ userSelect: "auto" }}
    >
    </path>
</svg>


    </div>
  )
}

export default ContactPage

  