import React, { useEffect, useState } from 'react';
import axios from "axios";


const Main = () => {
  const handleSubmit = (event) => {
     event.preventDefault();
     console.log(event.target[0].value);
  };
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect( () => {
    const fetchWeather = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {location: { city }, format: 'json', u: 'c'},
        headers: {
           "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
           "X-RapidAPI-Host": process.env.REACT_APP_API_HOST
        }
      };


      // .then(function (response) {

      // }).catch(function (error) {
      //   console.error(error);
      // });

      const response = await axios.request(options);
      console.log(response.data);
      // setQuote(response.data[random]);


    };
    fetchWeather();
  }, []);
  return (
    <div>
      <form onSubmit = {(event) => handleSubmit(event)}>
        <input type="text" id="searchInput" placeholder='saisissez une ville...'
        />
        <input type="button"  value="Search" id="searchInput"/>
      </form>
      <div className="card">
        <h2 className="city">(dynamique)</h2>
        <div className="infos">
          <h3 className="condition">Cloudy</h3>
          <p className="temperature"> 🌡Temperature:</p>
          <p className="sunrise"> ☀️ Sunrise:</p>
          <p className="humidity"> 💧Humidity:</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
