import React from 'react';
import "../styles/Main.css";
import Asterisk from './Asterisk';
import BodyPanel from './BodyPanel';
import Header from './Header';
import Hero from './Hero';
import ContentFull from './ContentFull';
import UnorderedList from './UnorderedList';
import LocationBanner from './LocationBanner';
import ContentWithRightRail from './ContentWithRightRail';
import Content from './Content';
import RightRail from './RightRail';
import Bottom from './Bottom';
import Footer from './Footer';
import Cards from './Cards';

function Main() {
  return (
    <div>
      <Header />
      <Hero darkText="true" phone="(219) 703-2088" ctaButton="false">
        To learn more and<br />
        schedule your lung<br />
        cancer screening, call
      </Hero>
      <div class="container">
        <ContentWithRightRail>
          <Content />
          <RightRail />
        </ContentWithRightRail>
        <ContentFull>
          <BodyPanel headline="Early detection saves lives. Call today.">
            Get screened for lung cancer at the provider that is most preferred for cancer care* in Northwest Indiana.
          </BodyPanel>
          <UnorderedList />
        </ContentFull>
        <Cards />
        <LocationBanner>There's a lung cancer screening location close to you:</LocationBanner>
        <Asterisk />
        <Footer />
      </div>
      <Bottom />
    </div>
  );
}

export default Main;