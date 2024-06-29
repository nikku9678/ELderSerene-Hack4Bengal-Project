import React from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$49/month",
      features: [
        "Personal Care and Nursing",
        "Doctor Consultation and Home Visits",
        "Emergency Medical Services",
      ],
    },
    {
      title: "Standard Plan",
      price: "$99/month",
      features: [
        "Personal Care and Nursing",
        "Doctor Consultation and Home Visits",
        "Emergency Medical Services",
        "Socializing Events and Activities",
        "Home Services",
      ],
    },
    {
      title: "Premium Plan",
      price: "$149/month",
      features: [
        "Personal Care and Nursing",
        "Doctor Consultation and Home Visits",
        "Emergency Medical Services",
        "Socializing Events and Activities",
        "Home Services",
        "24/7 Care and Health Monitoring",
        "Grocery and Pharmacy Services",
        "Scheduled Appointments and Reminders",
      ],
    },
  ];

  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div className="plan-card" key={index}>
          <h2>{plan.title}</h2>
          <p className="price">{plan.price}</p>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;
