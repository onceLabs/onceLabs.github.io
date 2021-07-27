import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import data from '../data/contact';
import ContactLayout from '../layouts/ContactLayout';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'support',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'or-I-really-like-your-website',
  'I\'ll-stop-distracting-you-now',
  'thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  // useInterval(() => {
  //   let newIdx = idx;
  //   let newChar = char;
  //   if (char - hold >= messages[idx].length) {
  //     newIdx += 1;
  //     newChar = 0;
  //   }
  //   if (newIdx === messages.length) {
  //     setIsActive(false);
  //   } else {
  //     updateMessage(messages[newIdx].slice(0, newChar));
  //     updateIter(newIdx);
  //     updateChar(newChar + 1);
  //   }
  // }, isActive ? delay : null);

  return (
    <ContactLayout>
      <Helmet title="Contact" />
      <article className="postAlt" id="contact">
        <header>
          <div className="title" style={{paddingTop: "5em"}}>
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <form class="gform" method="POST" action="https://script.google.com/macros/s/AKfycbzIUeUbEA_aqwYz8V54_X6MQR7lgQk-p-9dOJRkNPk1DZK61-1Ny32GUIF7xT7xVBrsDQ/exec">
          <div style={{display: "flex", flexDirection: "row", width: "100%", paddingBottom: "2em"}}>
            <div style={{display: "flex", flexDirection: "column", width: "100%", paddingRight: "2em"}}>
              <div id="nameContainer">
                <label>Name</label>
                <input name="name" type="text"></input>
                <label>required</label>
              </div>
              <div id="companyContainer" style={{paddingTop: "2em"}}>
                <label>Company</label>
                <input name="company" type="text"></input>
              </div>
            </div>
            <div style={{display:"flex", flexDirection: "column", width: "100%"}}>
              <div id="emailContainer">
                <label>Email</label>
                <input name="email" type="email"></input>
                <label>required</label>
              </div>
            </div>
          </div>
          <div style={{width: "100%"}}>
              <div id="messageContainer" style={{paddingTop: "0.5em"}}>
                <label>Message</label>
                <textarea name="message"></textarea>
                <label>required</label>
              </div>
            </div>
            <input type="submit" id="submit-form" class="hidden" />
        </form>

        <div className="email-at">
          <p>Feel free to get in touch. You can email us at: </p>
          <div
            className="inline-container"
            style={validateText(message) ? {} : { color: 'red' }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
          >
            <a href={validateText(message) ? `mailto:${message}@oncelabs.com` : ''}>
              <span>{message}</span>
              <span>@onceLabs.com</span>
            </a>
          </div>
        </div>
        <ul className="icons">
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </ContactLayout>
  );
};

export default Contact;
