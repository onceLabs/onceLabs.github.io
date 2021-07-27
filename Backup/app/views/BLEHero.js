import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import MainAlt from '../layouts/MainAlt';
import BLEHeroLayout from '../layouts/BLEHeroLayout';

const BLEHero = () => (
  <BLEHeroLayout>
    <Helmet title="Mobile" />
    <article className="app-showcase" id="index">
      <header>
        <div className="titleMain">
          <h2><Link to="/">Conquer Bluetooth Low Energy with BLE Hero</Link></h2>
          <div className="centeredLogo">
            <img src={`${BASE_PATH}/images/ble_hero_logo.png`} alt="" />
          </div>
          <div style={{width:"100%"}}>
            <div className="appStoreLinks">
              <div className="linkWrapperLeft">
                <Link to="https://apps.apple.com/us/app/ble-hero/id1013013325" className="leftAppStoreLink"><img src={`${BASE_PATH}/images/app-store-badge-ios.png`}/></Link>
              </div>
              <div className="linkWrapperRight">
                <Link to="https://apps.apple.com/us/app/ble-hero/id1013013325" className="rightAppStoreLink"><img src={`${BASE_PATH}/images/app-store-badge-android.png`}/></Link>
              </div>
            </div>
          </div>
          <p style={{textAlign:"center", marginRight: "5em", marginLeft: "5em"}}>BLE Hero is a comprehensive development tool for engineers, 
            software developers, or anyone developing Bluetooth Low Energy enabled products or applications.</p>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="leftImage">
            <img src={`${BASE_PATH}/images/BLEHeroScanning.svg`} alt="" />
          </div>
          <div className="rightText">
            <div className="title">
              <h2><Link to="/mobile">Advanced BLE Scanning</Link></h2>

                <ul className="no_bullet">
                  <li className="check">Company IDs from Bluetooth SIG</li>
                  <li className="check">Search by any values included in advertisement data</li>
                  <li className="check">Real-time RSSI plot for each discovered peripheral</li>
                  <li className="check">Real-time estimated advertisement interval</li>
                  <li className="check">Full breakdown of all advertisement data</li>
                  <li className="check">Favorites support</li>
                  <li className="check">Permanently ignore devices</li>
                  <li className="check">Locator mode</li>
                </ul>
            </div>
          </div>
        </div>
      </header>
      <header>
      <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/BLEHeroGatt.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/">GATT Explorer</Link></h2>

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
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="leftImage">
            <img src={`${BASE_PATH}/images/BLEHeroCharacteristic.svg`} alt="" />
          </div>
          <div className="rightText">
            <div className="title">
              <h2><Link to="/mobile">Interact with Characteristics</Link></h2>

                <ul className="no_bullet">
                  <li className="check">Native iOS Apps</li>
                  <li className="check">Native Android Apps</li>
                  <li className="check">Xamarin iOS and Android</li>
                  <li className="check">Flutter iOS and Android</li>
                  <li className="check">React Native iOS and Android</li>
                  <li className="check">User Experience (UX) Development</li>
                  <li className="check">User Interface (UI) Development</li>
                </ul>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div className="row">
          <div className="rightImage">
            <img src={`${BASE_PATH}/images/BLEHeroLog.svg`} alt="" />
          </div>
          <div className="leftText">
            <div className="title">
              <h2><Link to="/">Advanced Logging</Link></h2>

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
            </div>
          </div>
        </div>
      </header>
    </article>
  </BLEHeroLayout>
);

export default BLEHero;
