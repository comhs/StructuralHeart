import React from 'react';
import "../styles/Main.css";
import Bottom from './Bottom';
import Cards from './Cards';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

function Main() {
  return (
    <div>
      <Header />
      <div class="container">
        <Hero dark="true" phone="219-703-2047">Call today to schedule an appointment</Hero>
        <Content />
        <Cards />
        <Footer />
      </div>

      <div className="modal general closed">
        <div className="modal-content">
          <div className="modal-header">

            <img src="https://www.comhs.org/~/media/Images/Community-Healthcare-Only/Campaigns/CV/Cardiology-Destination/LOGO.png" alt="CHS Logo" className="modal-logo" />
            <p className="modal-title hide-on-mobile">Cardiology</p>
          </div>
          <div className="modal-close-button">
            <span className="close general">&times;</span>
          </div>
          <div className="modal-body">
            <p className="modal-text">Please contact me in the next 1-2 business days to schedule an appointment with a Community Healthcare System cardiologist.</p>
            <form id="CV_Cardiology_Destination_FY22_General_WebForm" name="CV_Cardiology_Destination_FY22_General_WebForm" action="https://comhs.secure.force.com/HC4__WebFormProcessor" method="post">
              <input type="hidden" className="reference" id="HC4__Inquiry__c.RecordTypeId" name="HC4__Inquiry__c.RecordTypeId" value="0121N000001HpbUQAS" />
              <input type="hidden" className="picklist" id="HC4__Inquiry__c.HC4__Status__c" name="HC4__Inquiry__c.HC4__Status__c" value="Open" />
              <input type="hidden" className="string" id="HC4__Inquiry__c.HC4__Subject__c" name="HC4__Inquiry__c.HC4__Subject__c" value="CV_Cardiology_Destination_FY22_General_WebForm form submission" />
              <input type="hidden" className="picklist" id="Patient.LeadSource" name="Patient.LeadSource" value="Web Form: CV_Cardiology_Destination_FY22" />
              <input type="hidden" className="picklist" id="Patient.HC4__MostRecentLeadSource__c" name="Patient.HC4__MostRecentLeadSource__c" value="Web Form: CV_Cardiology_Destination_FY22_General_WebForm" />
              <input type="hidden" className="string" id="DemandConnectForm" name="DemandConnect.Form" value="CV_Cardiology_Destination_FY22_General_WebForm" />
              <label className="string" id="Patient.FirstName_label" for="Patient.FirstName"></label>
              <input type="text" className="string" id="Patient.FirstName" name="Patient.FirstName" value="" placeholder="First Name" required /><br />
              <label className="string" id="Patient.LastName_label" for="Patient.LastName"></label>
              <input type="text" className="string" id="Patient.LastName" name="Patient.LastName" value="" placeholder="Last Name" required /><br />
              <label className="date" id="Patient.HC4__BirthdateEnc__c_label" for="Patient.HC4__BirthdateEnc__c"></label>
              <input type="text" className="date" id="Patient.HC4__BirthdateEnc__c" name="Patient.HC4__BirthdateEnc__c" value="" placeholder="Date of Birth" required /><br />
              <label className="email" id="Patient.Email_label" for="Patient.Email"></label>
              <input type="text" className="email" id="Patient.Email" name="Patient.Email" value="" placeholder="Email" required /><br />
              <label className="phone" id="Patient.Phone_label" for="Patient.Phone"></label>
              <input type="text" className="phone" id="Patient.Phone" name="Patient.Phone" value="" placeholder="Phone" required /><br />
              <label className="string" id="Patient.PostalCode_label" for="Patient.PostalCode"></label>
              <input type="text" className="string" id="Patient.PostalCode" name="Patient.PostalCode" value="" placeholder="Zip Code" required /><br />
              <input type="submit" value="Submit" className="disableOnClick" />
            </form>
          </div>
        </div>
      </div>
      <div className="modal covid closed">
        <div className="modal-content">
          <div className="modal-close-button">
            <span className="close covid">&times;</span>
          </div>
          <div className="modal-header">

            <img src="https://www.comhs.org/~/media/Images/Community-Healthcare-Only/Campaigns/CV/Cardiology-Destination/LOGO.png" alt="CHS Logo" className="modal-logo" />
            <p className="modal-title hide-on-mobile">COVID-19</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">Please contact me in the next 1-2 business days to schedule an appointment with a Community Healthcare System cardiologist.</p>
            <form id="CV_Cardiology_Destination_FY22_COVID_WebForm" name="CV_Cardiology_Destination_FY22_COVID_WebForm" action="https://comhs.secure.force.com/HC4__WebFormProcessor" method="post">
              <input type="hidden" className="reference" id="HC4__Inquiry__c.RecordTypeId" name="HC4__Inquiry__c.RecordTypeId" value="0121N000001HpbUQAS" />
              <input type="hidden" className="picklist" id="HC4__Inquiry__c.HC4__Status__c" name="HC4__Inquiry__c.HC4__Status__c" value="Open" />
              <input type="hidden" className="string" id="HC4__Inquiry__c.HC4__Subject__c" name="HC4__Inquiry__c.HC4__Subject__c" value="CV_Cardiology_Destination_FY22_COVID_WebForm form submission" />
              <input type="hidden" className="picklist" id="Patient.LeadSource" name="Patient.LeadSource" value="Web Form: CV_Cardiology_Destination_FY22" />
              <input type="hidden" className="picklist" id="Patient.HC4__MostRecentLeadSource__c" name="Patient.HC4__MostRecentLeadSource__c" value="Web Form: CV_Cardiology_Destination_FY22_COVID_WebForm" />
              <input type="hidden" className="string" id="DemandConnectForm" name="DemandConnect.Form" value="CV_Cardiology_Destination_FY22_COVID_WebForm" />
              <label className="string" id="Patient.FirstName_label" for="Patient.FirstName"></label>
              <input type="text" className="string" id="Patient.FirstName" name="Patient.FirstName" value="" placeholder="First Name" required /><br />
              <label className="string" id="Patient.LastName_label" for="Patient.LastName"></label>
              <input type="text" className="string" id="Patient.LastName" name="Patient.LastName" value="" placeholder="Last Name" required /><br />
              <label className="date" id="Patient.HC4__BirthdateEnc__c_label" for="Patient.HC4__BirthdateEnc__c"></label>
              <input type="text" className="date" id="Patient.HC4__BirthdateEnc__c" name="Patient.HC4__BirthdateEnc__c" value="" placeholder="Date of Birth" required /><br />
              <label className="email" id="Patient.Email_label" for="Patient.Email"></label>
              <input type="text" className="email" id="Patient.Email" name="Patient.Email" value="" placeholder="Email" required /><br />
              <label className="phone" id="Patient.Phone_label" for="Patient.Phone"></label>
              <input type="text" className="phone" id="Patient.Phone" name="Patient.Phone" value="" placeholder="Phone" required /><br />
              <label className="string" id="Patient.PostalCode_label" for="Patient.PostalCode"></label>
              <input type="text" className="string" id="Patient.PostalCode" name="Patient.PostalCode" value="" placeholder="Zip Code" required /><br />
              <input type="submit" value="Submit" className="disableOnClick" />
            </form>
          </div>
        </div>
      </div>
      <div className="modal heartscan closed">
        <div className="modal-content">
          <div className="modal-close-button">
            <span className="close heartscan">&times;</span>
          </div>
          <div className="modal-header">

            <img src="https://www.comhs.org/~/media/Images/Community-Healthcare-Only/Campaigns/CV/Cardiology-Destination/LOGO.png" alt="CHS Logo" className="modal-logo" />
            <p className="modal-title hide-on-mobile">Heart Care</p>
          </div>
          <div className="modal-body">
            <p className="modal-text">Please contact me in the next 1-2 business days to schedule an appointment with a Community Healthcare System cardiologist.</p>
            <form id="CV_Cardiology_Destination_FY22_HeartScan_WebForm" name="CV_Cardiology_Destination_FY22_HeartScan_WebForm" action="https://comhs.secure.force.com/HC4__WebFormProcessor" method="post">
              <input type="hidden" className="reference" id="HC4__Inquiry__c.RecordTypeId" name="HC4__Inquiry__c.RecordTypeId" value="0121N000001HpbUQAS" />
              <input type="hidden" className="picklist" id="HC4__Inquiry__c.HC4__Status__c" name="HC4__Inquiry__c.HC4__Status__c" value="Open" />
              <input type="hidden" className="string" id="HC4__Inquiry__c.HC4__Subject__c" name="HC4__Inquiry__c.HC4__Subject__c" value="CV_Cardiology_Destination_FY22_HeartScan_WebForm form submission" />
              <input type="hidden" className="picklist" id="Patient.LeadSource" name="Patient.LeadSource" value="Web Form: CV_Cardiology_Destination_FY22" />
              <input type="hidden" className="picklist" id="Patient.HC4__MostRecentLeadSource__c" name="Patient.HC4__MostRecentLeadSource__c" value="Web Form: CV_Cardiology_Destination_FY22_HeartScan_WebForm" />
              <input type="hidden" className="string" id="DemandConnectForm" name="DemandConnect.Form" value="CV_Cardiology_Destination_FY22_HeartScan_WebForm" />
              <label className="string" id="Patient.FirstName_label" for="Patient.FirstName"></label>
              <input type="text" className="string" id="Patient.FirstName" name="Patient.FirstName" value="" placeholder="First Name" required /><br />
              <label className="string" id="Patient.LastName_label" for="Patient.LastName"></label>
              <input type="text" className="string" id="Patient.LastName" name="Patient.LastName" value="" placeholder="Last Name" required /><br />
              <label className="date" id="Patient.HC4__BirthdateEnc__c_label" for="Patient.HC4__BirthdateEnc__c"></label>
              <input type="text" className="date" id="Patient.HC4__BirthdateEnc__c" name="Patient.HC4__BirthdateEnc__c" value="" placeholder="Date of Birth" required /><br />
              <label className="email" id="Patient.Email_label" for="Patient.Email"></label>
              <input type="text" className="email" id="Patient.Email" name="Patient.Email" value="" placeholder="Email" required /><br />
              <label className="phone" id="Patient.Phone_label" for="Patient.Phone"></label>
              <input type="text" className="phone" id="Patient.Phone" name="Patient.Phone" value="" placeholder="Phone" required /><br />
              <label className="string" id="Patient.PostalCode_label" for="Patient.PostalCode"></label>
              <input type="text" className="string" id="Patient.PostalCode" name="Patient.PostalCode" value="" placeholder="Zip Code" required /><br />
              <input type="submit" value="Submit" className="disableOnClick" />
            </form>
          </div>
        </div>
      </div>
      <div className="modal-overlay closed"></div>
      <Bottom />
      {/* <script src="./Scripts"></script> */}
    </div>
  );
}

export default Main;