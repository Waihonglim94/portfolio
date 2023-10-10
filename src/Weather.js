import React, { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "901cdd552fcc40b17b75b3fc33e88ee1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // const cities = ["New York", "Shanghai", "Malaysia", "Shenzhen"];
    const cities = ["Shenzhen"];
    const promises = cities.map(async city =>
      await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then( res => res.json())
    );

    Promise.all(promises).then(results => {
      setWeather(results);
      // console.log(results)
    });

  }, []);
  
  return (
    <div className="weather-container">
      {weather?weather.map((cityWeather, index) => (
        <div key={cityWeather.id}>
          {/* Location */}
          <p className="city-name">{cityWeather.name}</p>
          <p className="temperature">{Math.floor(cityWeather.main.temp)}°C</p>
          {/* Local Time
          <div className="local-time">
            <BlinkingClock index={index}/>
          </div> */}
        </div>
      )):<div className="city-name">Weather is loading</div>}
    </div>
  );
}

function BlinkingClock(props) {
    let Zone = 'America/New_York';
  
    if (props.index === 0) {
      Zone = 'America/New_York';
    } else if (props.index === 1) {
      Zone = 'Asia/Shanghai';
    } else if (props.index === 2) {
      Zone = 'Asia/Kuala_Lumpur';
    }
  
    const [time, setTime] = useState(getFormattedTime(Zone));
  
    function getFormattedTime(zone) {
      const now = new Date();
  
      const LocationTime = now.toLocaleTimeString('en-US', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit'
      });
  
      return LocationTime.replace(/(AM|PM)/, (match) => match.toLowerCase());
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getFormattedTime(Zone));
      }, 1000);
  
      return () => clearInterval(interval);
    }, [Zone]);
  
    return (
      <span>
        {time.split(":")[0]}
        <span className="blink">:</span>
        {time.split(":")[1]}
      </span>
    );
  }
  

export default WeatherWidget;