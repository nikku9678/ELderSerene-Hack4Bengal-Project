import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div className="about-first">
        <h1 className="about-title">Most Trusted Elder Care Services In Kolkata</h1>
        <p>From The Heart Of Kolkata, We Provide Home Care Services To Seniors So That They Are Never Lonely

Servicure is India's leading elder care organization. We work closely with senior citizens and their families providing a complete senior citizen care services in Kolkata by combining a team of highly trained nurses, care managers and through our many partners such as hospital care facilities, medical support, social workers, personal assistance, and dedicated trained nurses and more.</p>
      </div>

      <div className="about-second">
        <div className="about-second-left">
          <div><p>We proudly call ourselves the 'proxy' child! Our suite of services are designed to support senior citizens functionally in all ways, thereby ensuring that both the elder and their child feel amply supported. </p></div>
          <div className="about-service">
            <div>
            <i class="fa-solid fa-phone-volume"></i>
              <h2>24x7 Support</h2>
            </div>
            <div>
              <i class="fa-solid fa-phone-volume"></i>
              <h2>Trusted Care Managers</h2>
            </div>
            <div>
              <i class="fa-solid fa-phone-volume"></i>
              <h2>Personalised Service</h2>
            </div>
            <div>
              <i class="fa-solid fa-phone-volume"></i>
              <h2>Complete Care</h2>
            </div>
           
          </div>
        </div>
        <div className="about-second-right">
        <iframe width="450" height="250" src="https://www.youtube.com/embed/wS0SS2eeYP8" title="Geriatric Care@home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="our-mission">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
Our Mission
Our mission is to provide top-notch and cordial service that makes elderly people happy, content and satisfied. We want to lend our hands to those who need it most, which is why we have a team of experts available for all your eldercare needs.</p>
        </div>
        <div className="vision">
         
          <h2>Our Vision</h2>
          <p>To create a world and comfortable space where elderly people can feel nurtured, loved and cared for.</p>
        </div>
      </div>
      <div className="about-second">
        <div className="about-second-left">
          <img src="https://via.placeholder.com/500" alt="" />
        </div>
        <div className="about-second-right">
          <p>Our Founder</p>
          <h1 className="about-title">About</h1>
          
          <ul className='we-provide'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, asperiores.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
