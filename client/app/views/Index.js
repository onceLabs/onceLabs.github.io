import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainAlt from '../layouts/MainAlt';
import LandingLayout from '../layouts/LandingLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Index = () => {
  return (
  <LandingLayout>
    <div>
    <article className="post" id="index" >
      <header >
        <Link to="/contact" className="button-one">Schedule a Meeting &#x21e8;</Link>
      </header>
      <header>
        <div className="titleMain">
          <h2><Link to="/">Bluetooth Low Energy experts for iOS, Android and Embedded applications</Link></h2>
          <div className="horizontalImageContainer">
              <div className="symbol">
                <img src={`${BASE_PATH}/images/chip-outline.png`} alt="" />
                <div>
                <Link className="centeredLink">Embedded</Link>
                </div>
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/apple-outline.png`} alt="" />
                <div>
                <Link className="centeredLink">iOS Apps</Link>
                </div>
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/android-outline.png`} alt="" />
                <div>
                <Link className="centeredLink">Android Apps</Link>
                </div>
              </div>
              <div className="symbol">
                <img src={`${BASE_PATH}/images/bluetooth-outline.png`} alt="" />
                <div>
                <Link className="centeredLink">Bluetooth</Link>
                </div>
              </div>
          </div>
          <p style={{textAlign:"center"}}>
            onceLabs offers mobile application development for iOS and Android, 
            embedded software development, software analysis and debugging, 
            Bluetooth Low Energy training, and advisory services for Bluetooth 
            Low Energy enabled products. </p>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="leftImage">
            <img src={`${BASE_PATH}/images/mobile-dev-ble.svg`} alt="" />
          </div>
          <div className="rightText">
            <div className="title">
              <h2><Link to="/mobile">Mobile App Development</Link></h2>
              <p>We offer full mobile application development for Android and iOS. We also offer product-specific 
                Bluetooth Low Energy API development and handoff if you already have in-house mobile development 
                resources but not the expertise required to integrate BLE. In the latter case, we build robust 
                APIs for iOS and Android tailored to your specific use case.</p>
                <ul className="no_bullet">
                  <li className="check">Native iOS Apps</li>
                  <li className="check">Native Android Apps</li>
                  <li className="check">Xamarin iOS and Android</li>
                  <li className="check">Flutter iOS and Android</li>
                  <li className="check">React Native iOS and Android</li>
                  <li className="check">User Experience (UX) Development</li>
                  <li className="check">User Interface (UI) Development</li>
                </ul>
                <div className="listButton">
                  <Link to="/contact" className="button-two">Get a Free Quote &#x21e8;</Link>
                </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/firmware.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/">Embedded Development</Link></h2>
              <p>One of our greatest strengths is our extensive background in developing connectivity applications 
              for both mobile and embedded platforms in parallel, which gives us better design insight than companies 
              who focus on mobile or embedded exclusively.</p>
              <ul className="no_bullet">
                <li className="check">Bluetooth Low Energy</li>
                <li className="check">Thread</li>
                <li className="check">WiFi</li>
                <li className="check">NFC</li>
                <li className="check">Low Power Cellular</li>
                <li className="check">GPS</li>
                <li className="check">Zephyr</li>
                <li className="check">Bare Metal</li>
                <li className="check">FreeRTOS</li>
                <li className="check">ThreadX</li>
                <li className="check">Embedded Linux</li>
              </ul>
              <div className="listButton">
                <Link to="/contact" className="button-two">Get a Free Quote &#x21e8;</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="leftImage">
            <img src={`${BASE_PATH}/images/teaching.svg`} alt="" />
          </div>
          <div className="rightText">
            <div className="title">
              <h2><Link to="/">Bluetooth Low Energy training</Link></h2>
              <p>Our experts are available for on-site training to get your team up to speed on both mobile, 
              and embedded development focused on Bluetooth Low Energy. We will tailor the training based on 
              preliminary meetings with your team to assess your teams specific
              needs and existing skillsets.
              </p>
              <ul className="no_bullet">
                <li className="check">On-site (Offered virtually due to COVID)</li>
                <li className="check">Embedded Platforms</li>
                <li className="check">Android and iOS</li>
                <li className="check">Bluetooth Low Energy as stand-alone topic</li>
                <li className="check">Training tailored based on needs</li>
                <li className="check">Hand-off training so your engineers can take-over</li>
                <li className="check">Jump Start - Let us ju mp start your development project</li>
              </ul>
              <div className="listButton">
                <Link to="/contact" className="button-two">Learn More &#x21e8;</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/firmware.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/">Industries</Link></h2>
              <p>One of our greatest strengths is our extensive background in developing connectivity applications 
              for both mobile and embedded platforms in parallel, which gives us better design insight than companies 
              who focus on mobile or embedded exclusively.</p>
              <ul className="no_bullet">
                <li className="check">Smart Home</li>
                <li className="check">Wearables</li>
                <li className="check">Industrial IoT</li>
                <li className="check">Internet of Things (IoT)</li>
                <li className="check">Industrial IoT (IIoT)</li>
                <li className="check">Automotive</li>
                <li className="check">Healthcare & Fitness</li>
                <li className="check">Bare Metal</li>
                <li className="check">FreeRTOS</li>
                <li className="check">ThreadX</li>
                <li className="check">Embedded Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
            <div className="title">
              <h2><Link to="/">Capabilities</Link></h2>
          </div>
        <div className="features">
          <section>
            <span className="iconMajor">
                <FontAwesomeIcon icon={faWifi}/>
            </span>
            <h3>Wireless Technologies</h3>
            <p>
              Our focus is Bluetooth Low Energy, but 
              we cover all wireless technologies including 
              Wi-Fi, NFC, GPS and Low Power Cellular wireless 
              technologies.
            </p>
          </section>
          <section>
            <span className="iconMajor">
              <FontAwesomeIcon icon={faMobileAlt}/>
            </span>
            <h3>Mobile Technologies</h3>
            <p>
              Native iOS and Android development.  
              Our preference is to rely on native tools 
              and development environments for each platform 
              but we can also support Xamarin and other 
              cross-platform frameworks.
            </p>
          </section>
          <section>
            <span className="iconMajor">
              <FontAwesomeIcon icon={faMicrochip}/>
            </span>
            <h3>Embedded Platforms</h3>
            <p>
            SoC Partners: Nordic, Cypress, Silicon Labs, 
            ON Semiconductor, STMicroelectronics, NXP.
            Module Partners: Rigado, Murata, Laird, 
            Cypress, Silicon Labs, ON Semiconductor, 
            Taiyo Yuden, Telit, u-Blox
            </p>
          </section>
          <section>
            <span className="iconMajor">
              <FontAwesomeIcon icon={faCloud}/>
            </span>
            <h3>Cloud Integration</h3>
            <p>
              AWS IoT, RESTful, Node, Azure, IBM.
            </p>
          </section>
          <section>
            <span className="iconMajor">
              <FontAwesomeIcon icon={faUser}/>
            </span>
            <h3>UI/UX</h3>
            <p>
              User interface and user experience design 
              is paramount to a quality mobile application. 
              We offer full user interface design and user 
              experience optimaztion.
            </p>
          </section>
          <section>
            <span className="iconMajor">
              <FontAwesomeIcon icon={faPalette}/>
            </span>
            <h3>Graphic Design</h3>
            <p>
              Graphic design is an important part of any 
              mobile application.  onceLabs offers graphic 
              design for customers who do not have in-house 
              design resources.  By providing graphic design 
              services we can eliminate the need for 
              additional points of contact on the customers end.
            </p>
          </section>
        </div>    
        </div>
      </header>
    </article>
    </div>
  </LandingLayout> 
  );
};

export default Index;
