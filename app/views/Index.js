import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="titleMain">
          <h2><Link to="/">onceLabs is your go-to resource for Mobile and Embedded BLE applications.</Link></h2>

          <div className="horizontalImageContainer">
              <div className="symbol">
                <img src={`${BASE_PATH}/images/cp-chip.png`} alt="" />
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/apple-logo.png`} alt="" />
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/android-logo.png`} alt="" />
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/bluetooth-logo.png`} alt="" />
              </div>
          </div>

          <p style={{textAlign:"center"}}>
            <br></br><br></br>
            onceLabs is focused on building quality user experiences between 
            people and wireless products via mobile and embedded software development. 
            We are Bluetooth Low Energy experts with a passion for connecting mobile devices and 
            embedded products over wireless interfaces.
            <br></br><br></br>
            We offer mobile, and embedded software development, software analysis and debugging, 
            Bluetooth Low Energy training, and advisory services for Bluetooth Low Energy enabled products.</p>
        </div>
      </header>
      <header>
          <div className="title">
          <h3><Link to="/">Mobile Development</Link></h3>
          <br></br>
          <p>We offer full mobile application development for Android and iOS. We also offer product-specific 
            Bluetooth Low Energy API development and handoff if you already have in-house mobile development 
            resources but not the expertise required to integrate BLE. In the latter case, we build robust 
            APIs for iOS and Android tailored to your specific use case.</p>
            <div className="illustration">
              <img src={`${BASE_PATH}/images/mobile-dev-ble.svg`} alt="" />
            </div>
        </div>
      </header>
      <header>
        <div className="title">
          <h3><Link to="/">Embedded Development</Link></h3>
          <p>One of our greatest strengths is our extensive background in developing connectivity applications 
            for both mobile and embedded platforms in parallel, which gives us better design insight than companies 
            who focus on mobile exclusively.</p>
            <div className="illustration">
              <img src={`${BASE_PATH}/images/firmware.svg`} alt="" />
            </div>
        </div>
      </header>
      <header>
        <div className="title">
          <h3><Link to="/">Training</Link></h3>
          <p>Our experts are available for on-site training to get your team up to speed on both mobile, 
            and embedded development focused on Bluetooth Low Energy.</p>
            <div className="illustration">
              <img src={`${BASE_PATH}/images/teaching.svg`} alt="" />
            </div>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
