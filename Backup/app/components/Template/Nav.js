import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/OnceLabs.png`} alt="" />
      </Link>
      <header>
        <h2>onceLabs</h2>
        <p><a href="mailto:support@onceLabs.com">support@onceLabs.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>onceLabs is your go-to resource for your mobile and embedded BLE applications.  
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/about` ? <Link to="" className="button">Learn More</Link> : <Link to="/" className="button">About Us</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; onceLabs <Link to="/">www.onceLabs.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
