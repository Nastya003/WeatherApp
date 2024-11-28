import React from 'react'
import { 
  WiDirectionUpRight, 
  WiThermometer, 
  WiStrongWind, 
  WiBarometer, 
  WiHumidity , 
  WiDaySunny 
} from "react-icons/wi";

const WeatherCard = ({weatherData}) => {
  return (
    <div className='weather_card_wrapper'>
        <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
        <p>Local time: {weatherData.current.observation_time}</p>
        <div className='weather_card_main_info'>
          <img src={weatherData.current.weather_icons[0]} alt="Weather icon"/>
          <p>{weatherData.current.weather_descriptions}</p>
          <p>{weatherData.current.temperature}°C</p>
        </div>
        <table>
          <tr>
            <td><WiThermometer /> </td>
            <td><WiDirectionUpRight /> </td>
            <td><WiStrongWind /> </td>
          </tr>
          <tr>
            <td>Feels like: {weatherData.current.feelslike}°C</td>
            <td>Wind diraction: {weatherData.current.wind_dir}</td>
            <td>Wind speed: {weatherData.current.wind_speed}</td>
          </tr>
          <tr>
            <td><WiBarometer /> </td>
            <td><WiHumidity /></td>
            <td><WiDaySunny /> </td>
          </tr>
          <tr>
            <td>Pressure: {weatherData.current.pressure}</td>
            <td> Humidity: {weatherData.current.humidity}</td>
            <td>UV index: {weatherData.current.uv_index}</td>
          </tr>
        </table>
    </div>
  )
}

export default WeatherCard;
