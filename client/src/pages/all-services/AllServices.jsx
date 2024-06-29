import React from "react";
import "./AllServices.css";
import SubscriptionPlans from "../subscription-plans/SubscriptionPlans SubscriptionPlans";

const AllServices = () => {
  const services = [
    {
      title: "Personal Care and Nursing",
      description:
        "Experienced caregivers provide personalized assistance with daily activities, such as bathing, dressing, and medication management, ensuring comfort and dignity.",
    },
    {
      title: "Doctor Consultation and Home Visits",
      description:
        "Access to qualified doctors for online consultations or in-person visits at home, allowing for convenient and personalized medical care.",
    },
    {
      title: "Emergency Medical Services",
      description:
        "Prompt and reliable emergency response system, ensuring timely medical attention for urgent situations, providing peace of mind for both elders and families.",
    },
    {
      title: "Socializing Events and Activities",
      description:
        "Organized social activities and events to promote social interaction, combat loneliness, and enhance cognitive well-being, creating a sense of community and purpose.",
    },
    {
      title: "Home Services",
      description:
        "Professional cleaning, cooking, and maid services for a comfortable and well-maintained living environment, freeing elders from household chores.",
    },
    {
      title: "24/7 Care and Health Monitoring",
      description:
        "Round-the-clock personal caretakers and regular health checkups to ensure continuous monitoring, early intervention, and prompt medical attention.",
    },
    {
      title: "Grocery and Pharmacy Services",
      description:
        "Convenient access to monthly grocery supplies and pharmacy needs delivered directly to their doorstep, simplifying daily tasks and reducing stress.",
    },
    {
      title: "Scheduled Appointments and Reminders",
      description:
        "Personalized scheduling and reminders for appointments, medication schedules, and important events, ensuring adherence to routines and reducing forgetfulness.",
    },
  ];

  return (
    <div className="all-services">
      <div className="desc">
        <h1>Available Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nulla!</p>
      </div>
      <div className="all-services-container">
        {services.map((service, index) => (
          <div className="all-services-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="service-plan">
        <div className="plan-desc">
          <h1>Choose Your Plan</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolorem.</p>
        </div>
        <div className="plan">
        <SubscriptionPlans />
      </div>
      </div>
    </div>
  );
};

export default AllServices;
