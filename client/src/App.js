import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from "react-router-dom"
import Home from './Home';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Counts from './Counts/Counts';
import Services from './Services/Services';
import Cta from './Cta/Cta';
import Testimonial from './Testimonial/Testimonial';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Counts />
      <Portfolio />
      <Services />
      <Cta />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div >
  )
}

export default App