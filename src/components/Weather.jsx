import React,{ useState } from "react";
import axios from "axios";
import { useRecoilState} from "recoil";
import { weatherAtom } from "../App";
import { cityAtom } from "../App";

function Weather(){
    const[weather,setWeather]=useRecoilState(weatherAtom);
    const[city,setCity]=useRecoilState(cityAtom);

    const apiKey="7c431ce5a7f8fe752eb9aaf466dcf8cb";
    const fetchWeather=async()=>{
        try{
            let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeather(response.data);


        }
        catch(error){
            console.log("error fetching weather data",error);

        }
    }

    return(
        <>
        <input type="text" className="mt-10 mb-10 border-gray-300" placeholder="enter city name" onChange={(e)=>{setCity(e.target.value)}}/>
        <button className='"bg-green-500 hover:bg-green-700  text-dark font-bold text-lg py-3 px-6 rounded"' onClick={fetchWeather}>Get Weather</button>
        {weather && (
            <div>
                <h1>{weather.name},{weather.sys.country}</h1>
                <p>Temperature={weather.main.temp}degree celcius</p>
                <p>Weather={weather.weather[0].description}</p>
            </div>
        )}
        </>
    )
}
export default Weather;
