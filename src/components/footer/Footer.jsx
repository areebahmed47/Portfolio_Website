import React from 'react'
import "./footer.css"
// import them_pattern from "../../assets/theme_pattern.svg"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className="footer-top-left">
        <div className='footer-title'>
      <h1>AReeB</h1>
      {/* <img src={them_pattern} alt="" /> */}
    </div>
            <p>I am Areeb Ahmed. JavaScript Developer with 1 year of experience. Let's build something great together!</p>
        </div>
        <div className="footer-top-right">
        <ul className='footer-top-right-social'>
        <a href="https://www.linkedin.com/in/hafiz-areeb-ahmed/" target='blank'><li><i className="fa-brands fa-linkedin"></i></li></a>
       <a href="https://www.facebook.com/xtylish.bacha.1654700" target='blank'> <li><i className="fa-brands fa-facebook"></i></li></a>
       <a href="https://github.com/areebahmed47" target='blank'> <li><i className="fa-brands fa-github"></i></li></a>
        <a href="mailto:areebahmed1018@gmail.com" target='blank'><li><i className="fa-brands fa-google"></i></li></a>
        </ul>
            
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Areeb Ahmed. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
