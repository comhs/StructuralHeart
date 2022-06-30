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
      <Bottom />
    </div>
  );
}

export default Main;