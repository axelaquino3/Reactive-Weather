import React from "react";




function WeatherCard({ data, images }) {
  const { city, temperature, forecast } = data



  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = { images() } alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

export default WeatherCard