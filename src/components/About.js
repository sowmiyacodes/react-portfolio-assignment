//About.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">
                        <h2 className="section-title">
	{/* <h2 className="section-title">
                                <FontAwesomeIcon icon={faUser} 
                                className="d-block mx-auto mb-2 text-primary" size="3x" />
                            </h2>*/}
							<img src="sowmiya.jpg" className="d-block mx-auto mb-2 text-primary" size="3x" />
                        </h2>
                    </div>
                    <p className="section-description mt-4">
                        Motivated IT undergraduate skilled in programming with C and python and
frontend basics(HTML,CSS,JS). Strong understanding of web development
principles and eager to build real-world applications.Interested in DSA(Data
Structures and Algorithm). Seeking opportunities to grow in a software
development environment.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;