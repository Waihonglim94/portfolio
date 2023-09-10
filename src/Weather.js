// import React, { useState, useEffect } from "react";
// import "./App.css";

// const api = {
//   key: "901cdd552fcc40b17b75b3fc33e88ee1",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function WeatherWidget() {
//   const [weather, setWeather] = useState([]);

//   useEffect(() => {
//     const cities = ["New York", "Shanghai", "Malaysia"];
//     const promises = cities.map(city =>
//       fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//     );

//     Promise.all(promises).then(results => {
//       setWeather(results);
//       console.log(results)
//     });

//   }, []);

//   return (
//     <div className="weather-container">
//       {weather.map(cityWeather => (
//         <div key={cityWeather.id} className="city-weather">
//           {/* Location */}
//           <p className="city-name">{cityWeather.name}</p>
//           <p className="temperature">{cityWeather.main.temp}°C</p>
//           {/* Local Time */}
//           <div className="local-time">
//             <BlinkingClock />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function BlinkingClock() {
//     const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setTime(prevTime => (prevTime === time ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : time));
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, [time]);
  
//     return (
//       <span>
//         {time.split(":")[0]}
//         <span className="blink">:</span>
//         {time.split(":")[1]}
//       </span>
//     );
//   }  

// export default WeatherWidget;


import React, { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "901cdd552fcc40b17b75b3fc33e88ee1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherWidget() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const cities = ["New York", "Shanghai", "Malaysia"];
    const promises = cities.map(city =>
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
    );

    Promise.all(promises).then(results => {
      setWeather(results);
      console.log(results)
    });

  }, []);

  return (
    <div className="weather-container">
      {weather.map((cityWeather, index) => (
        <div key={cityWeather.id} className="city-weather">
          {/* Location */}
          <p className="city-name">{cityWeather.name}</p>
          <p className="temperature">{cityWeather.main.temp}°C</p>
          {/* Local Time */}
          <div className="local-time">
            <BlinkingClock index={index}/>
          </div>
        </div>
      ))}
    </div>
  );
}

function BlinkingClock(props) {
    // {console.log(index.index)}
    let Zone = 'America/New_York'
    if(props.index===0){
        Zone='America/New_York'
    } else if (props.index ===1){
        Zone='Asia/Shanghai'
    } else if (props.index ===2){
        Zone='Asia/Kuala_Lumpur'
    }
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  
    useEffect(() => {
        
      const interval = setInterval(() => {
      const now = new Date();

      const LocationTime = now.toLocaleTimeString('en-US', {
        timeZone: Zone,
        hour: '2-digit', 
        minute: '2-digit'
      });
      setTime(LocationTime);

    }, 1000);

    return () => clearInterval(interval);
  });
  
    return (
      <span>
        {time.split(":")[0]}
        <span className="blink">:</span>
        {time.split(":")[1]}
      </span>
    );
  }  

export default WeatherWidget;