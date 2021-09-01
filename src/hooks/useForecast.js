import { useState } from "react";
import getCurrentForecast from "../helpers/getCurrentForecast";
import getUpcomingForecast from "../helpers/getUpcomingForecast";
import axios from "axios";

// const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const PROXY_URL = "https://the-ultimate-api-challenge.herokuapp.com";
const URL = `https://www.metaweather.com/api/location`;

const useForecast = () => {
  const [isError, setError] = useState({ status: false, msg: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (place) => {
    const { data } = await axios(`${PROXY_URL}/${URL}/search/?query=${place}`);
    if (!data || data.length === 0) {
      setError({ status: true, msg: "There is no such location." });
      setIsLoading(false);
      return;
    }
    return data[0];
  };

  const getForecast = async (woeid) => {
    const { data } = await axios(`${PROXY_URL}/${URL}/${woeid}`);
    if (!data || data.length === 0) {
      setError({ status: true, msg: "Something went wrong." });
      setIsLoading(false);
      return;
    }
    // console.log(data.consolidated_weather);
    return data;
  };

  const gatherForecastData = (data) => {
    const currentDay = getCurrentForecast(
      data.consolidated_weather[0],
      data.title
    );
    const upcomingDays = getUpcomingForecast(
      data.consolidated_weather.slice(1, 6)
    );

    // console.log(currentDay, upcomingDays);
    setForecast({ currentDay, upcomingDays });
    setIsLoading(false);
  };

  const submitRequest = async (place) => {
    setIsLoading(true);
    setError({ status: false, msg: "" });
    setForecast(null);

    const response = await getWoeid(place);
    if (!response?.woeid) return;

    const data = await getForecast(response.woeid);
    if (!data) return;

    gatherForecastData(data);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
