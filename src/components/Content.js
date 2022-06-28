import React from 'react'

function Content() {
  return (
    <div className="main">
      <section className="main-content">
        <h2 className="xl-heading">A cardiologist has your best interest at heart.</h2>
        <p>Community Healthcare System cardiologists manage every step of your heart care. With access to the broadest array of testing options and the most innovative imaging technology, they will guide you through the care you need from prevention
          and diagnosis, through intervention – all from the largest and most advanced cardiovascular network in Northwest Indiana.</p>
      </section>
      <section className="main-risks">
        <p className="risk-factors">See a cardiologist soon if you have these risk factors:</p>
        <ul>
          <li>Shortness of breath</li>
          <li>Irregular heartbeats</li>
          <li>Swelling in legs or ankles</li>
          <li>Chronic fatigue</li>
          <li>High blood pressure</li>
          <li>High cholesterol</li>
          <li>Diabetes</li>
          <li>A family history of heart disease</li>
        </ul>
        <p className="emergency-disclaimer"><strong>Call 9-1-1 immediately if you are experiencing any medical emergency.</strong></p>
      </section>
    </div>
  )
}

export default Content