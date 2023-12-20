import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect} from "react"; // manage all link => create new class
import navIcon1 from '../assets/nav-icon1.svg'; //use img as object
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScolled(true);
            }
            else {
                setScolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return ()=> window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><h1>HUE (LILY) THU NGUYEN</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#qualification" className={activeLink === 'qualification'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('qualification')}>Qualification</Nav.Link>
            <Nav.Link href="#works" className={activeLink === 'works'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('works')}>Work Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#leader" className={activeLink === 'leader'? 'active navbar-link': 'navbar-link'} onClick = {()=> onUpdateActiveLink('leader')}>Leadership Experience</Nav.Link>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt=""/></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt=""/></a>
                </div>
                <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}