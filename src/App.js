//App.js 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Resume from './components/Resume'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Skills from './components/Skills'; 

function App() { 
return ( 
	<Router> 
	<div> 
		<Header /> 
		<Routes> 
		<Route path="/react-portfolio-assignment" element={<About />} /> 
		<Route path="/react-portfolio-assignment/projects" element={<Projects />} /> 
		<Route path="/react-portfolio-assignment/skills" element={<Skills />} /> 
		<Route path="/react-portfolio-assignment/resume" element={<Resume />} /> 
		<Route path="/react-portfolio-assignment/contact" element={<Contact />} /> 
		</Routes> 
		<Footer /> 
	</div> 
	</Router> 
); 
} 

export default App;