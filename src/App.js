import logo from './logo.svg';
import './App.css';
import './style.css'
import About from './components/About.js'
import Navbar from './components/Navbar.js'
import React, {useState, useEffect} from 'react'
import Image from './components/Image.js'
import Skills from './components/Skills.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavigationBar from './components/NavigationBar.js'
import Form from './components/Form.js'
import {Tabs, Tab} from 'react-bootstrap'
import WeatherApp from './components/WeatherApp.js';
import Projects from './components/Projects.js'


function App() {
  return (
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path = '/about' element ={<About/>}/>
          <Route path = '/projects' element = {<Projects/>}/>
        </Routes>
        {/* <About/> */}
        {/* <Image/> */}
        {/* <Skills Skills = 'soft' skillSet = {['communication', 'leadership', 'creativity']}/>
        <Skills Skills = 'technical' skillSet = {['programming', 'mathematics', 'english']}/> */}
        <Form/>

        <div>
          <h2>Categories:</h2>
          <Tabs defaultActiveKey='languages' id = 'languages-hobbies-tabs'>
            <Tab eventKey = 'languages' title = 'languages'>
              <h4>languages</h4>
              <p>english arabic spanish</p>
            </Tab>
            <Tab eventKey = 'hobbies' title = 'hobbies'>
              <h4>hobbies</h4>
              <p>reading coding studying</p>
            </Tab>
          </Tabs>
        </div>
        <WeatherApp/>  
      </Router>
  );
}



export default App;
