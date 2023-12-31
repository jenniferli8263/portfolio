import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import linkedin from '../assets/img/linkedin.svg';
import insta from '../assets/img/insta.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const updateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container className="nav-container">
            <Navbar.Brand href="#home">
            {/* <img src={logo} alt="Logo"/> */}
            <h1>Jennifer Li</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => updateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => updateActiveLink('skills')}>About</Nav.Link>
                {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => updateActiveLink('skills')}>Skills</Nav.Link> */}
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick = {() => updateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/jenniferli8263/" target="_blank"><img src={githubIcon} alt=""/></a>
                <a href="https://www.linkedin.com/in/jenniferli8263/" target="_blank"><img src={linkedin} alt="" /></a>
                <a href="https://www.instagram.com/_jennifer_li/" target="_blank"><img src={insta} alt="" /></a>
                
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
              <a href="https://drive.google.com/file/d/1Nl8AsFBmnMacFvVSDyj78fJi2ZKkf4FW/view?usp=sharing" target="_blank">
              {/* <Link to="/resume"> */}
                <button className="cv"><span>Resume</span></button>
              {/* </Link> */}
              
              </a>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;