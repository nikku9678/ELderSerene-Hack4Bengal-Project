import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="choose-us">
      <div className='top'>
        <h1>Why Choose Us</h1>
        <p>At ElderSerene, we are dedicated to revolutionizing elder care with a holistic and innovative approach. Our comprehensive services and personalized care plans ensure that every elder receives the support and attention they deserve, allowing them to live with dignity, happiness, and well-being.</p>
      </div>
      <div className="content">
        <div className="choose-left">
          <h2>Our Key Features</h2>
          <p>Discover the unique aspects that set ElderSerene apart and why we are the preferred choice for elder care.</p>

          <div className="description">
            <p>Our platform addresses the critical needs of the aging population through:</p>
            <ul>
              <li>Personal Care and Nursing</li>
              <li>Doctor Consultation and Home Visits</li>
              <li>Emergency Medical Services</li>
              <li>Socializing Events and Activities</li>
              <li>Home Services</li>
              <li>24/7 Care and Health Monitoring</li>
              <li>Grocery and Pharmacy Services</li>
              <li>Scheduled Appointments and Reminders</li>
            </ul>
            <button>Read More</button>
          </div>
        </div>
        <div className="choose-right">
          <div className="video-description">
            <div className="video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
