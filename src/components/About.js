import React, {useState} from 'react'



function About() {
  const [darkMode, SetDarkMode] = useState(false)
  function toggleDarkMode(){
      const backgroundColor = document.getElementsByClassName('Body').backgroundColor
      SetDarkMode(!darkMode)
  }
  return (
    <section className={`container mt-5 {darkMode ? 'dark-mode' : ''}`}>
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body text-center">
              <h5 className="card-title">Introduction</h5>
              <p className="card-text">
                My name is Husain Althagafi, and I am an ICS student at King Fahd University of Petroleum and Minerals.
              </p>
              <h5 className="card-title">Interests</h5>
              <p className="card-text">
                I am interested in Artificial Intelligence, Data Analysis, and Backend Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
