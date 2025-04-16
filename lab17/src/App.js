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
import Course from './components/CourseList.js'

function App() {
  return (
      <div className = 'App'>
        <Course/>
      </div>
  );
}



export default App;
