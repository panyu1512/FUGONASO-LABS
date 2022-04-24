import React from 'react';
import './Navbar.css'
import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import metamaskIcon from "../../assets/images/metamask.png";

const Navigation = ({getUserWallet, wallet}) => {
  return (
    <Navbar expand="lg" bg="dark">
        <Container>
            <Navbar.Brand href="#home">
                <a id="logo" className="text-light">FUGONASO LABS</a>
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
                <button id="button" type="button" class="btn btn-outline-light">
                    <img
                        src={metamaskIcon}
                        width="24"
                        height="24"
                        className="d-inline-block align-top"
                    />{' '}
                CONECTARSE A LA CARTERA</button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Navigation