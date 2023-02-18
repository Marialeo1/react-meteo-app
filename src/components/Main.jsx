import React, { useEffect, useState } from 'react';
import axios from "axios";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect( () => {
    const fetchWeather = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {location: {city}, format: 'json', u: 'f'},
        headers: {
          .env.X-RapidAPI-Key,
          .env.X-RapidAPI-Host
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

      const reponse = await axios.get("");
      setQuote(reponse.data[random]);
    };
    fetchWeather();
  }, []);
  return (
    <div>
      <form>
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
