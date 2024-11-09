import React from 'react';
import "../Components/Home.css";
import { Logo, Mainbg } from '../Assets';

const Home = () => {
  return (
    <div className="header">
      <div className="bgimg">
        <img src={Mainbg} alt="main-bg" />
        <div className="centered-text"><h1>Design &<br /> Strategy for <br />a New Era</h1></div>
        <div className="hero-base">
            <div className="base-left">
            <p>Specialized in digital marketing, branding, and web development to elevate your business in a competitive digital world.</p>
            <button>Get Started</button>
            </div>
            <div className="base-right">
                <a href="#">info@pendagon.in</a>
                <a href="#">+91 9037622606</a>
            </div>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <div className="socials">
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="menu">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
