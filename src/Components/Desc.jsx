import React,{useEffect} from 'react'
import "../Components/Desc.css"
import { Descimg } from '../Assets'

const Desc = () => {
    useEffect(() => {
        // Select the element to observe (bottom trigger)
        const trigger = document.querySelector('.bottom-trigger');
        const items = document.querySelectorAll('.design-bottom');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    items.forEach((item) => item.classList.add('visible'));
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Trigger when at least 10% of bottom div is visible
        });

        if (trigger) observer.observe(trigger);

        return () => observer.disconnect();
    }, []);

  return (
    <div className='desc-section'>
        <div className='heading'>
            <h2>We Build <br />Brands People Love</h2>
        </div>
        <div className="img-sec">
            <img src={Descimg} alt="image1" />
            <div className="description">
                <p>Creating meaningful connections through impactful design and strategy.</p>
                <button>about us</button>
            </div>
        </div>
        <div className="design-bottom">
            <p className="design-item item1 hidden box purple">Be Creative</p>
            <p className="design-item item2 hidden">Social Specialist</p>
            <p className="design-item item3 hidden">Social Strategies</p>
            <p className="design-item item4 hidden">Creative Content</p>
            <p className="design-item item5 hidden">Web Design</p>
        </div>
        <div className="bottom-trigger" style={{ height: '1px', position: 'absolute', bottom: '0', width: '100%' }}></div>
    </div>
  )
}

export default Desc