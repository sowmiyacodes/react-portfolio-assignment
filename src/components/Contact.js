// Contact.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone, faMapMarkerAlt  } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; 

const Contact = () => { 	

	return ( 
		<section id="contact" className="container"> 
			<h2 className="section-title">Contact</h2> 
			<p className="section-description"> 
				Feel free to reach out for
				collaboration or inquiries. 
			</p> 
			<ul className="contact-list list-unstyled"> 
				<li> 
					<FontAwesomeIcon icon={faPhone} 
						className="contact-icon" /> 
					760496666
				</li> 
				<li> 
					<FontAwesomeIcon icon={faEnvelope} 
						className="contact-icon" /> 
					sowmiya9b@gmail.com
				</li> 
				<li> 
					<FontAwesomeIcon icon={faMapMarkerAlt} 
						className="contact-icon" /> 
					Yeswanth Nagar, Chennai
				</li> 				
				
			</ul> 
		</section> 
	); 
}; 

export default Contact;