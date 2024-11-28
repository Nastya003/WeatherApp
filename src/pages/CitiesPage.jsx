import React, { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard';
import { getCurrentWheather } from '../api';
import Loader from '../components/Loader';
import ErrorModal from '../components/ErrorModal';

const cityNames = [
    'London',
    'New York',
    'Tokyo',
    'Minsk',
    'Amsterdam',
    'Pekin',
    'Budapest',
    'Dublin',
]

const weatherTypes = [
  'Sunny',
  'Partly cloudy',
  'Rainy',
  'Snowy',
  'Clear',
  'Parftial Fog',
  'Mist',
];

const CitiesPage = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedWeatherType, setSelectedWeatherType] = useState('');

    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = cityNames.map(city => getCurrentWheather(city));
          const results = await Promise.all(data);
          setWeatherData(results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      getData();
    }, []);
  
    const handleFilterChange = (type) => {
      setSelectedWeatherType(type);
    }

    const filteredWetherData = weatherData.filter(data => {
      if(!selectedWeatherType) return true;
      return data.current.weather_descriptions[0].toLowerCase() === selectedWeatherType.toLowerCase();
    })
  
    return (
      <div className='wrapper'>
        <div className='select_wrapper'>
          Choose filter:
          <select onChange={(e) => handleFilterChange(e.target.value)} value={selectedWeatherType}>
            <option value="">All</option>
            {weatherTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className='cards'>
          {loading && <Loader />}
          {error && <ErrorModal message = {error} onClose={() => setError(null)}/>}
          {filteredWetherData.length > 0 ? (
            filteredWetherData.map((data, index) => (
              <WeatherCard key={index} weatherData={data}/>
            ))
          ) : (
            <p>Nothing found</p>
          )}
        </div>
      </div>
    )
}

export default CitiesPage