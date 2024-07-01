import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation } from "../api";
const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setdata] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData =async()=>{
        const response =await getWeatherDataForCity(searchCity)
        setdata(response);
    }

    const fetchCurrentLocationData=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data)=>setdata(data));
        });
    };

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity,fetchData,fetchCurrentLocationData }}>
            {props.children}
        </WeatherContext.Provider>

    )
}