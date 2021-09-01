import moment from "moment";

const getUpcomingForecast = (data) => {
  return data.map((item) => ({
    imgUrl: `https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`,
    temperature: item.max_temp.toFixed(1),
    weekday: moment(item.applicable_date).format("dddd"),
  }));
};

export default getUpcomingForecast;
