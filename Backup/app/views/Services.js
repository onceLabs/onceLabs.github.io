import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import MobileLayout from '../layouts/MobileLayout';



const Services = () => (
  <MobileLayout>
    <Helmet title="Mobile" />
    <article className="service-post" id="index">
      <header>
        <div className="titleMain">
          <h2><Link to="/services">Services</Link></h2>
          <ul className="no_bullet">
            <li className="check">Looking to integrate Bluetooth Low Energy technology into your product?</li>
            <li className="check">Already have an app that you paid to develop but isn't working properly?</li>
            <li className="check">Are you ready to bring Mobile development in-house but don't know where to start?</li>
            <li className="check">Do you have mobile developers but need help on the embedded side?</li>
            <li className="check">Do you have embedded developers but need help on the mobile side?</li>
            <li className="check">onceLabs can help</li>
          </ul>

        </div>
      </header>
      <div className="horizontalImage">
        <img src={`${BASE_PATH}/images/app_robot.svg`} alt="" />
      </div>
      <header>
        <div className="row">
            <div className="title">
                <h2><Link to="/">Experience matters</Link></h2>
                <p>When you hire a 3rd party to build your app, you should be confident in their ability to execute.  Mobile apps that use Bluetooth
                    require deep expertise on both the mobile and embedded side and the typical app development company won't be able to bring that to
                    the table. onceLabs can. 
                </p>
                <p>onceLabs specializes in building mobile apps that connect people with products over Bluetooth.
          </p>
            </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/mobile-dev-ble.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/mobile">Mobile App Development</Link></h2>
              <p>We offer full mobile application development for Android and iOS. We also offer product-specific 
                Bluetooth Low Energy API development and handoff if you already have in-house mobile development 
                resources but not the expertise required to integrate BLE. In the latter case, we build robust 
                APIs for iOS and Android tailored to your specific use case.</p>
                <div className="listButton">
                  <Link to="/contact" className="button-two">Get a Free Quote &#x21e8;</Link>
                </div>
            </div>
          </div>
        </div>
      </header>
      <header>
      <div className="horizontalImageContainer">
        <div className="symbol">
          <img src={`${BASE_PATH}/images/app_robot.svg`} alt="" />
        </div>
        <div className="symbol">
          <img src={`${BASE_PATH}/images/app_robot.svg`} alt="" />
        </div>
      </div>
      </header>
      <header>
        <div className="row">
            <div className="title">
            <h2><Link to="/">Building Great Products should be fun</Link></h2>
            <p>One of our greatest strengths is our extensive background in developing connectivity applications 
                for both mobile and embedded platforms in parallel, which gives us better design insight than companies 
                who focus on mobile exclusively.</p>
            </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/mobile-dev-ble.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/mobile">Training</Link></h2>
              <p>We offer full mobile application development for Android and iOS. We also offer product-specific 
                Bluetooth Low Energy API development and handoff if you already have in-house mobile development 
                resources but not the expertise required to integrate BLE. In the latter case, we build robust 
                APIs for iOS and Android tailored to your specific use case.</p>
                <div className="listButton">
                  <Link to="/contact" className="button-two">Get a Free Quote &#x21e8;</Link>
                </div>
            </div>
          </div>
        </div>
      </header>
    </article>
  </MobileLayout>
);

export default Services;
