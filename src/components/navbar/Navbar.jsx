import React, { useRef, useState } from 'react';
import './navbar.css';
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { Link } from 'react-scroll'; // Import from react-scroll

function Navbar() {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <div className='nav-title'>
        <h1>AReeB</h1>
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-manu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        
        {/* Home */}
        <li>
          <Link className='anchor-link' to="home" smooth={true} duration={500}>
            <p onClick={() => setmenu("home")}>Home</p>
          </Link>
          {menu === "home" ? <img src={underline} alt='' /> : null}
        </li>

        {/* About Me */}
        <li>
          <Link className='anchor-link' to="about" smooth={true} duration={500} offset={50}>
            <p onClick={() => setmenu("about")}>About Me</p>
          </Link>
          {menu === "about" ? <img src={underline} alt='' /> : null}
        </li>

        {/* Services */}
        <li>
          <Link className='anchor-link' to="services" smooth={true} duration={500} offset={50}>
            <p onClick={() => setmenu("services")}>Services</p>
          </Link>
          {menu === "services" ? <img src={underline} alt='' /> : null}
        </li>

        {/* Portfolio */}
        <li>
          <Link className='anchor-link' to="work" smooth={true} duration={500} offset={50}>
            <p onClick={() => setmenu("work")}>Portfolio</p>
          </Link>
          {menu === "work" ? <img src={underline} alt='' /> : null}
        </li>

        {/* Contact */}
        <li>
          <Link className='anchor-link' to="contact" smooth={true} duration={500} offset={50}>
            <p onClick={() => setmenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt='' /> : null}
        </li>
      </ul>

      {/* Social Links */}
      <div className="nav-connect">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/hafiz-areeb-ahmed/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/xtylish.bacha.1654700" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/areebahmed47" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:areebahmed1018@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
