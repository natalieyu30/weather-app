import moment from "moment";

const getCurrentForecast = (data, title) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("MMMM Do"),
  location: title,
  temperature: data.the_temp.toFixed(1),
  weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
  desciption: data.weather_state_name,
});

export default getCurrentForecast;
