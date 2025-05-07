//Header.js 
import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import { FontAwesomeIcon } 
from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } 
from '@fortawesome/free-brands-svg-icons'; 
import { 
faInfoCircle, faCode, 
faCogs, faEnvelope 
} 
from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 
import './style.css'; 

const Header = () => { 
return ( 
	<Navbar bg="dark" expand="lg"
	className="custom-navbar shadow-sm"> 
	<Navbar.Brand as={Link} to="/react-portfolio-assignment"
		className="brand-name"> 
		<span className="display-4 text-white ho"> 
		SOWMIYA 
		</span> 
	</Navbar.Brand> 
	<Navbar.Toggle aria-controls="navbarNav" />
	<Navbar.Collapse id="navbarNav" className="text-white">	
		<Nav className="ml-auto "> 
		<Nav.Link as={Link} to="/react-portfolio-assignment"> 
			<span>About</span> 
			<FontAwesomeIcon icon={faInfoCircle} 
			className="ml-2 text-light ho ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/react-portfolio-assignment/projects"> 
			<span>Projects</span> 
			<FontAwesomeIcon icon={faCode} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/react-portfolio-assignment/skills"> 
			<span>Skills</span> 
			<FontAwesomeIcon icon={faCogs} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/react-portfolio-assignment/contact"> 
			<span>Contact</span> 
			<FontAwesomeIcon icon={faEnvelope} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		</Nav> 
		<Nav className="ml-auto"> 
		<Nav.Link href="https://github.com/sowmiya"> 
			<span className="sr-only">Github</span> 
			<FontAwesomeIcon icon={faGithub} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		<Nav.Link href="https://linkedin.com/in/sowmiya"> 
			<span className="sr-only">Linkedin</span> 
			<FontAwesomeIcon icon={faLinkedin} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		</Nav> 
	</Navbar.Collapse>
	</Navbar> 
); 
}; 

export default Header;