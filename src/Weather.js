import React from "react";
import axios from 'axios';
import { func } from "prop-types";
import { Bars } from  'react-loader-spinner'



export default function Weather(props) {
    function displayWeather(response) {
        alert(`The weather in ${response.data.name} ${response.data.main.temp}`);
    }

     let apiKey = "094780c710fa4efd669f0df8c3991927";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return (
        <Bars
  height="180"
  width="180"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    )
}