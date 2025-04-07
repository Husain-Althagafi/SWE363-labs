import React, {useState} from 'react'

function Projects(){
    const [darkMode, SetDarkMode] = useState(false)
      function toggleDarkMode(){
          const backgroundColor = document.getElementsByClassName('Body').backgroundColor
          SetDarkMode(!darkMode)
      }
      return (
        <div class="container mt-5">
                <h2 class="text-center mb-4">Projects</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body text-center">
                                <h5 class="card-title">LLM Model</h5>
                                <p class="card-text">A Large Language Model that demonstrates many different Artificial Intelligence principles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body text-center">
                                <h5 class="card-title">Chess.com Clone</h5>
                                <p class="card-text">A full front-end and back-end clone of the famous chess.com website.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body text-center">
                                <h5 class="card-title">Netflix Clone</h5>
                                <p class="card-text">A full back-end clone of the famous streaming service Netflix.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )

}

export default Projects