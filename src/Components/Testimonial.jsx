import React from 'react'
import '../Components/Testimonial.css'
import { Divij } from '../Assets'

const Testimonial = () => {
  return (
    <div className='test-sec' id='portfolio'>
        <div className="test-top">
            <p>Testimonials from <br />Our Users</p>
            <p>2024</p>
        </div>
        <div className="test-cont">
            <h2>Creatify transformed our brand image and helped us reach new heights.</h2>
        </div>
        <div class="profile-container">
            <img src={Divij} alt="Profile Image" class="profile-img" />
            <div class="profile-info">
                <p class="name">Alexis Rivera <br /> CEO, TechVentures</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial