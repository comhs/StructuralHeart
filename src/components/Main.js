import React from 'react';
import "../styles/Main.css";
import Asterisk from './Asterisk';
import BodyPanel from './BodyPanel';
import Header from './Header';
import Hero from './Hero';
import ContentFull from './ContentFull';
import Footer from './Footer';
import Cards from './Cards';
// import StoryModal from './StoryModal';
// import PdfViewer from './PdfViewer';
// import FileDownload from './FileDownload';

function Main() {
  return (
    <div>
      {/* <StoryModal /> */}
      <Header />
      <Hero darkText="true" phone="(219) 703-2062" ctaButton="false">
        Call today to schedule<br />
        an appointment
      </Hero>
      <div class="container">
        <ContentFull>
          <BodyPanel headline="The most preferred destination for heart care* is right in your own backyard.">
            Community Health System has established a team of expert heart specialists in the busiest, most robust, and clinically advanced structural heart/valve program between Indianapolis and Chicago. The physician leader, Dr. Samer Abbas, trained and practiced at leading Chicago academic medical centers and came here with a vision to build a “destination” heart program for residents of northwest Indiana.
          </BodyPanel>
        </ContentFull>
        <Cards />
        <Footer />
        {/* <PdfViewer /> */}
        <Asterisk />
      </div>
    </div>
  );
}

export default Main;