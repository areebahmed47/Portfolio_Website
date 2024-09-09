import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Service from './components/service/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
    <Router basename="/portfolio_website">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
      </Router>
      </>
  )
}

export default App
