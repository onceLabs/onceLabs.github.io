import React from "react";
import { Container, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div style={{display: "flex", alignItems: "center", padding: "2em"}}>
            <div style={{display: "flex", flexDirection: "row", width: "100%", paddingLeft: "0em"}}>
                <Nav justified>
                    <div>
                        <img style={{width: "10em"}} src={`${BASE_PATH}/images/oncelabs-white.png`} alt="" />
                    </div>
                </Nav>
            </div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", paddingRight: "0em"}}>
                <Nav justified>
                <NavItem className="item"
                    eventKey={1}>
                    <Link to="/">onceLabs</Link>
                </NavItem>
                <NavItem className="item"
                    eventKey={2}
                    title="Item">
                    <Link to="/mobile">Mobile</Link>
                </NavItem>
                <NavItem className="item"
                    eventKey={3}>
                    <Link to="/embedded">Embedded</Link>
                </NavItem>
                <NavItem className="item"
                    eventKey={4}>
                    <Link to="/portfolio">Our Work</Link>
                </NavItem>
                <NavItem className="item"
                    eventKey={5}>
                    <Link to="/blehero">BLE Hero</Link>
                </NavItem>
                <NavItem className="item"
                    eventKey={6}>
                    <Link to="/contact">Contact</Link>
                </NavItem>
                </Nav>
            </div>
        </div>
        <div className="text-center small copyright">
          © onceLabs 2021
        </div>
      </Container>
    </footer>
  );
}

export default Footer;