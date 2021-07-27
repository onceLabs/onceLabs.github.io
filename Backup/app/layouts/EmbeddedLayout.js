import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LazyHero from 'react-lazy-hero';
import Analytics from '../components/Template/Analytics';
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';
import ScrollToTop from '../components/Template/ScrollToTop';
import { urlencoded } from 'body-parser';
import { Link } from 'react-router-dom';
import Footer from '../components/Template/Footer';
//background-image: url('Image_Location'); background-size: cover; height:480px; padding-top:80px;">

const EmbeddedLayout = (props) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | onceLabs" defaultTitle="onceLabs" />
    <LazyHero imageSrc={`${BASE_PATH}/images/oncelabs_banner.png`} opacity="0" minHeight="25vh">
    </LazyHero>
    <div id="wrapper">
      <Header />
      <div id="main">
        {props.children}
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
);

EmbeddedLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

EmbeddedLayout.defaultProps = {
  children: null,
  fullPage: false,
};

export default EmbeddedLayout;
