import React from 'react';
import './Navbar.css'
import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import metamaskIcon from "../../assets/images/metamask.png";

const Navigation = ({getUserWallet, wallet}) => {
  return (
    <Navbar expand="lg" fixed="top" className='Navbar'>
        <Container>
            <Navbar.Brand href="#home">
                FUGONASO LABS
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link id="link" href="#" className="text-light">
                    INICIO
                </Nav.Link>
                <Nav.Link id="link" href="#" className="text-light">
                    MINT
                </Nav.Link>
                <Nav.Link id="link" href="#" className="text-light">
                    DESCUBRE TODOS LOS NFT
                </Nav.Link>
                <div
                  onClick={() => getUserWallet()}
                  className="btn btn-outline-light" id="button"
                >
                  <div>
                    <img className="logo-metamask" src={metamaskIcon}></img>
                  </div>
                  {wallet ? (
                    <span className="userWallet"> {wallet}</span>
                  ) : (
                    <span className="connect">CONECTAR CARTERA</span>
                  )}
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Navigation