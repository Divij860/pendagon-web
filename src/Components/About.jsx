import React from 'react'
import "../Components/About.css"
import { Aboutimg } from '../Assets'

const About = () => {
  return (
    <div className="about-sec" id='about'>
      <div className="top">
        <p>about</p>
      </div>
      <div class="card">
      <div class="imgBx">
        <img src={Aboutimg} alt=""/>
      </div>
      <div class="content">
        <p>As the best Digital Marketing agency in Kerala, we are storytellers, visionaries, and architects of online success, not just an agency specializing in digital marketing and web design! Immerse yourself in a universe where digital landscapes are expertly created and creativity has no boundaries. Our goal is to take companies to new heights through strategic digital marketing and beautiful site designs! </p>
      </div>
    </div>
    <div className='vision'>
      <div className="vision-cont">
        <h2>We move <span>visions</span> into reality</h2>
        <p>
        At Pendagon, we don’t just dream; we deliver. Our services are designed to transform your ideas into tangible outcomes that resonate with your audience.
        </p>
      </div>
    </div>
    </div>
  );
};



export default About