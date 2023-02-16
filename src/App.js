import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import { FaAlipay, FaGithub } from "react-icons/fa"
import { Projects, Project } from './pages/projects/projects';

const Home = () => {
  return (
    <div>
      
      <Projects />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/project/:name" element={ <Project /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
