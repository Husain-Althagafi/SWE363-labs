import React, {useState, useEffect} from 'react'

function WeatherApp(){
    const [weather, setWeather] = useState('')
    const [loading, setLoading] = useState(true)
    const city = 'London'

    useEffect(() => {
        fetch(`https://wttr.in/${city}?format=%C+%t`)
            .then(response => response.text())
            .then(data => {
                setWeather(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('error', error)
                setLoading(false)
            })
    }, [])

    return (
        <div>
        <h1>Weather</h1>
        <h2>weather in {city}</h2>
        {loading ? <p>Loading weather</p> : <p>weather loaded: {weather}</p>}
        </div>
    )
}
export default WeatherApp