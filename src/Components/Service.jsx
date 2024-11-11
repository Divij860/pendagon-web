import React from 'react'
import "../Components/Service.css"
import { Serviceimg } from '../Assets'

const Service = () => {
  return (
    <div>
        <div className="service-sec" id='service'>
            <div className="layer"></div>
            <img src={Serviceimg} alt="" />
            <div className="service-cont">
            <div className="service-top">
                <p>Service</p>
                <p>2024</p>
            </div>
            <div className="service-table">
            <table className="custom-table">
                <tr>
                    <td rowspan="4" className="column-1"><p>We Offer <span>Services</span></p>
                    <a href="#">Show all</a>
                    </td>
                    <td class="column-2">Digital Marketing</td>
                </tr>
                <tr>
                    <td class="column-2">Web Designing & Development</td>
                </tr>
                <tr>
                    <td class="column-2">Search Engine Marketing</td>
                </tr>
                <tr>
                    <td class="column-2">Branding</td>
                </tr>
            </table>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service