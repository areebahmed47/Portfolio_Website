import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Service from './components/service/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <>
     <Router basename="/portfolio_website">
      <Navbar />
      {/* Use "id" attributes for section scrolling */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="mywork">
        <MyWork />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Router>
      </>
  )
}

export default App
