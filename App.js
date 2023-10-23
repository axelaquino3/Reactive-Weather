import {React, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Sunny from "./assets/Sunny.svg"
import Cloudy from "./assets/Cloudy.svg"
import Rainy from "./assets/Rainy.svg"
import PartlyCloudy from "./assets/PartlyCloudy.svg"
import cities from "./data"
import Location from "./components/Location"


function displayImages(location, cities) {
    
    const images = {
        "Sunny": Sunny,
        "Cloudy": Cloudy,
        "Rainy": Rainy,
        "Partly cloudy": PartlyCloudy
      
      }

    
      for(city of cities) {
        if(city.city === location) return images[city.forecast]
    }
}




function App() {
    const [location, setLocation] = useState("New York City")


    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
            
                {cities.map((city, idx) => (<WeatherCard keys={idx} data={city} images={ () => displayImages(city.city, cities) } />))}

            </div>

            <Location location={ location } setsLocation={ setLocation } data={ cities } images={ () => displayImages(location, cities) } />

            
        </>
    )
}



export default App;