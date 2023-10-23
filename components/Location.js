import React from "react"

function Location({location, setsLocation, images, data}) {


    const myCity = data.find(city => city.city === location)

    
    return (
        <div className = "card">
            <h2>My Location's Weather</h2>
            <div className = "img-container">
                <img className="card-img-top" src = {images()} alt="Card image cap" id = "icon"/>
            </div>
            <div class="card-body">
                <h3 className="card-title">{myCity.city}</h3>
                <h5 className="card-text">{myCity.temperature}</h5>
                <h5 className="card-text">{myCity.forecast}</h5>
            </div>
        </div>
      );

}

export default Location