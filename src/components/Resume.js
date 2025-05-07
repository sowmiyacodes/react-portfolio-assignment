// Resume.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCogs } 
	from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const Resume = () => { 

	return ( 
		<section id="resume"
			className="container text-center"> 
			<div className="row justify-content-center align-items-center"> 
				<div className="col-md-8"> 
					<h2 className="section-title"> 
						<FontAwesomeIcon icon={faCogs} 
							className="mr-2" /> 
						Skills 
					</h2> 										
					<div className="row">
        
        <div className="col-md-6 mb-4">
          <h4 className="resume-download-btn" >Education</h4>
          <div className="edu-block mb-3">
            <h6>2024 - Present</h6>
            <p><strong>MIT, Chennai</strong><br />B.Tech Information Technology</p>
          </div>
          <div className="edu-block mb-3">
            <h6>2023 - 2024</h6>
            <p><strong>AMPS, Chennai</strong><br />Class 12<br />Marks: 490/500<br />Cutoff: 197.5/200</p>
          </div>
		</div>  
		<div className="col-md-6 mb-4">
          <h4 className="resume-download-btn">Soft Skills</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Leadership</li>
            <li className="list-group-item">Teamwork</li>
            <li className="list-group-item">Time Management</li>
            <li className="list-group-item">Critical Thinking</li>
            <li className="list-group-item">Effective Communication</li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <h4 className="resume-download-btn">Technical Skills</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Programming Languages: <i>C, Python, PHP </i></li>
            <li className="list-group-item">Web Technologies: <i>HTML, CSS, JS </i></li>
            <li className="list-group-item">Databases: <i>MySQL</i></li>
            <li className="list-group-item">Currently Learning: <i>React</i></li>
          </ul>
		</div>  
		<div className="col-md-6 mb-4">
          <h4 className="resume-download-btn">Languages</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">English</li>
            <li className="list-group-item">Tamil</li>
          </ul>
        </div>
        			</div> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default Resume;