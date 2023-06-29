import React, { useEffect, useState } from "react";
import Search from "./Component/search";
import "./App.css";
import Weather from "./Component/weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState();
  const [value, setValue] = useState("New+york");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=6d0c66075af436b6db4eff57b29df116`
    )
      .then((response) => response.json())
      .then((data) =>
        setWeatherInfo({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          description: data.weather[0].description,
          clouds: data.clouds.all,
          wind: data.wind.speed,
        })
      );
   
  }, [value]);
  if (!weatherInfo) return <h2>Loading</h2>;

  console.log(weatherInfo);
  return (
    <div className="container-fluid">
      <img src="nature.jpg" className="img-fluid"/>
      <div className="display">
        <div className="row justify-content-center ">
          <Search setValue={setValue}/>
        </div>
        <h2 className="cityname">{`${weatherInfo.city}, ${weatherInfo.country}`}</h2>
        <div className="">
          <Weather data={weatherInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
