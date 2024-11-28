import React, { useEffect } from 'react'
import { useState } from "react";
import {getCurrentWheather} from '../api';
import WeatherCard from '../components/WeatherCard';
import Loader from '../components/Loader';
import ErrorModal from '../components/ErrorModal';
import { IoSearch } from "react-icons/io5";
import ConfirmModal from '../components/ConfirmModal';

const MainPage = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); 

  useEffect(() => {
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const currLocation = `${latitude},${longitude}`;
                    localStorage.setItem('currLocation', currLocation);
                    getData(currLocation);
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    getCurrentLocation();
}, []);

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const currLocation = location || localStorage.getItem('currLocation');
      const data = await getCurrentWheather(currLocation);
      if (!data || data.error) {
        throw new Error('City is not found');
      }
      setWeatherData(data);
      localStorage.setItem('lastLocation', currLocation);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchClick = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false); 
    getData();
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
  };

  return (
    <div className='wrapper'>
      
      <div className='search_wrapper'>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='City name...' />
        <div className='icon_btn'>
          <IoSearch size={30}/>
          <button type='button' onClick={handleSearchClick}></button>
        </div> 
      </div>
      {loading && <Loader />}
      {error && <ErrorModal message = {error} onClose={() => setError(null)}/>}
      {weatherData && <WeatherCard weatherData = {weatherData} />}
      <ConfirmModal
        isOpen={isConfirmOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default MainPage;