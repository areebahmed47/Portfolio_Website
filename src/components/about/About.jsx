import React from 'react';
import "./about.css"
import them_pattern from "../../assets/theme_pattern.svg"
import profile_image from "../../assets/Areeb_profile.jpg"


function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={them_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I’m Areeb Ahmed, a software engineer specializing in web development. With 1 years of experience, I focus on creating efficient, user-friendly solutions and tackling complex challenges. 
                  </p>
                <p>I’m passionate about JavaScript and always eager to learn and collaborate. Explore my portfolio to see my work or get in touch if you’d like to connect!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width: "50%"}} /></div>
            </div>
            
        </div>
      </div>
      <div className="about-achivements">
              <div className="about-achivement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className="about-achivement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
              <div className="about-achivement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
    </div>
  )
}

export default About
