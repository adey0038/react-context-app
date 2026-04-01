import { useWeather } from "../context/weatherContext.jsx";
import styles from "../styles/forecast.module.css";

const formatTime = (dt_txt) => {
  const date = new Date(dt_txt);
  return date.toLocaleString("en-US", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function Forecast() {
  const { forecast, selectedLocation, locations } = useWeather();

  if (!locations || locations.length === 0) {
    return <p>No Stored Location.</p>;
  }

  if (!selectedLocation) {
    return <p>Please select a location to get forecast.</p>;
  }

  if (!forecast) {
    return <p>Loading forecast...</p>;
  }

  return (
    <div className={styles.forecast}>
      <h3>48-Hour Forecast for {selectedLocation.name}</h3>
      <div className={styles.forecastGrid}>
        {forecast.list.slice(0, 16).map((item) => (
          <div className={styles.forecastCard} key={item.dt_txt}>
            <p>{formatTime(item.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <p>{Math.round(item.main.temp)}°C</p>
            <p>{item.weather[0].description}</p>
            <p>💧 {item.main.humidity}%</p> {/* Droplet emoji */}
            <p>💨 {item.wind.speed} m/s</p> {/* Wind emoji */}
          </div>
        ))}
      </div>
    </div>
  );
}
