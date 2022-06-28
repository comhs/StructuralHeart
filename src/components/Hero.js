import React from 'react';

function Hero( { children, phone, dark }) {
  return (
    <div className="hero">
      <div className="hero-image"><img src="https://www.comhs.org/~/media/Images/Community-Healthcare-Only/Campaigns/CV/Cardiology-Destination/hero.png" alt="Hero" /></div>
      <div className="hero-cta">
        <h1 className={dark === "true" ? "headline-dark" : "headline"}>{children}</h1>
        <a href={"tel:" + phone.replace(/-/g, "")} className="hero-phone">{phone}</a>
        <div className="hero-button" id="general">Request&nbsp;an&nbsp;Appointment</div>
      </div>
    </div>
  )
}

export default Hero