import { Navbar, Nav, Container} from "react-bootstrap";
import { useState, useEffect} from "react"; // manage all link => create new class
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
      const onScroll = () => {
        if(window.scrollY > 50){
          setScrolled(true);
        }
        else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, []) 

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
    <Router>
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><h2>HUE (LILY) THU NGUYEN</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#qualification" className={activeLink === 'qualification'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('qualification')}>About</Nav.Link>
            <Nav.Link href="#works" className={activeLink === 'works'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('works')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#leader" className={activeLink === 'leader'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('leader')}>Leadership</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}