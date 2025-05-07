// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const Projects = () => { 	

	return ( 
		<section id="projects"
			className="container text-center"> 			
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Projects 
			</h2> 
			<div className="row"> 
			<div className="col-md-6"> 
				{/* Personal Portfolio Website */}
				<div className="card mb-3">
					<div className="card-body">
					<h5 className="card-title">Personal Portfolio Website (HTML, CSS, JavaScript)</h5>
					<h6 className="card-subtitle mb-2 text-muted">2024 - Present</h6>
					</div>
					<ul className="list-group list-group-flush">
					<li className="list-group-item">Created a personal website to showcase school and college experiences.</li>
					<li className="list-group-item">Built static pages with a top navigation menu for structured access.</li>
					<li className="list-group-item">Designed and embedded an alumni registration form.</li>
					<li className="list-group-item">Currently integrating JavaScript for form validation and interactivity.</li>
					</ul>
				</div>
			</div>	

			{/* School Management System */}
			<div className="col-md-6"> 
			<div className="card mb-3">
				<div className="card-body">
				<h5 className="card-title">School Management System (Python + Tkinter Treeview)</h5>
				<h6 className="card-subtitle mb-2 text-muted">2023 - 2024</h6>
				</div>
				<ul className="list-group list-group-flush">
				<li className="list-group-item">Developed a basic school management system as part of Class 12 coursework.</li>
				<li className="list-group-item">Implemented dynamic date input and output functionalities.</li>
				<li className="list-group-item">Designed a user-friendly menu-driven interface.</li>
				<li className="list-group-item">Used Treeview to manage and display student records in a tabular format.</li>
				</ul>
			</div>
			</div>
			{/* Admin Dashboard */}
			<div className="col-md-6"> 
			<div className="card mb-3">
				<div className="card-body">
				<h5 className="card-title">Admin Dashboard with Database Integration (PHP + MySQL)</h5>
				<h6 className="card-subtitle mb-2 text-muted">2023 - 2024</h6>
				</div>
				<ul className="list-group list-group-flush">
				<li className="list-group-item">Created a user-interactive admin system for CRUD operations.</li>
				<li className="list-group-item">Enabled real-time Create, Read, Update, Delete operations using PHP.</li>
				<li className="list-group-item">Connected forms and buttons to a localhost MySQL database.</li>
				<li className="list-group-item">Built dynamic update and delete features with immediate reflection in the menu table.</li>
				<li className="list-group-item">Improved backend logic and database management skills.</li>
				</ul>
			</div>
			</div>
			</div> 
		</section> 
	); 
}; 

export default Projects;