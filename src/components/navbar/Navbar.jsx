import React , {useRef, useState} from 'react';
import './navbar.css';
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
// import them_pattern from "../../assets/theme_pattern.svg"



function Navbar() {

  const [menu, setmenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right ="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right ="-350px"
  }

  return (
    <div className='navbar'>
    <div className='nav-title'>
      <h1>AReeB</h1>
      {/* <img src={them_pattern} alt="" /> */}
    </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-manu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href="#home"><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"> <p onClick={()=>setmenu("about")}>About Me</p>  </AnchorLink>{menu==="about"?<img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services"> <p onClick={()=>setmenu("services")}>Services</p>  </AnchorLink>{menu==="services"?<img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#work"> <p onClick={()=>setmenu("work")}>Portfolio</p>  </AnchorLink>{menu==="work"?<img src={underline} alt='' />:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"> <p onClick={()=>setmenu("contact")}>Contact</p>  </AnchorLink>{menu==="contact"?<img src={underline} alt='' />:<></>}</li>
      </ul>
      <div className="nav_connect"><a className='anchor-link' href="#contact"><ul>
        <a href="https://www.linkedin.com/in/hafiz-areeb-ahmed/" target='blank'><li><i class="fa-brands fa-linkedin"></i></li></a>
       <a href="https://www.facebook.com/xtylish.bacha.1654700" target='blank'> <li><i class="fa-brands fa-facebook"></i></li></a>
       <a href="https://github.com/areebahmed47" target='blank'> <li><i class="fa-brands fa-github"></i></li></a>
        <a href="mailto:areebahmed1018@gmail.com" target='blank'><li><i class="fa-brands fa-google"></i></li></a>
        </ul></a>
      </div>
    </div>
  )
}

export default Navbar
