import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(false);

  function showWeather(response) {
    setSearch(true);
    setForecast({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let weatherForm = (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input onChange={updateCity} type="Search" placeholder="Enter city" />
        <input type="Submit" value="Submit" />
      </form>
    </div>
  );

  if (search) {
    return (
      <div  className="weather-forecast">
        {weatherForm}
        <ul>
          <li>Temperature: {Math.round(forecast.temperature)} °C</li>
          <li>Weather: {forecast.description} </li>
          <li>Humidity: {forecast.humidity}% </li>
          <li>Wind Speed: {Math.round(forecast.wind)} km/h </li>
          <li>
            {" "}
            <img src={forecast.icon} alt={forecast.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{weatherForm}</div>;
  }
}
