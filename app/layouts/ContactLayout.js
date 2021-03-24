import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Analytics from '../components/Template/Analytics';
import Header from '../components/Template/Header';
import Footer from '../components/Template/Footer';
import Nav from '../components/Template/Nav';
import ScrollToTop from '../components/Template/ScrollToTop';
import { urlencoded } from 'body-parser';
//background-image: url('Image_Location'); background-size: cover; height:480px; padding-top:80px;">
const ContactLayout = (props) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | onceLabs" defaultTitle="onceLabs" />
    <div id="wrapper">
      <Header />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <Nav />}
    </div>
    <div>
      <Footer />
    </div>
  </>
);

ContactLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

ContactLayout.defaultProps = {
  children: null,
  fullPage: false,
};

export default ContactLayout;
