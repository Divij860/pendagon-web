import React from 'react'
import "../Components/Clients.css"
import { Clientimg } from '../Assets'

const Clients = () => {
  return (
    <div className='client-section'>
        <div className='client-container'>
        <p style={{color : '#575757', fontSize : '20px'}}>Our Clients</p>
        <div className="clients">
            <h2>Our Awesome <span>Clients</span></h2>
            <p>Our clients are our priority. They trust us to bring their ideas to life with quality design and a focus on their goals. We work together to create results that truly meet their needs.</p>
            <div className="client-img-sec">
            <img src={Clientimg} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Clients