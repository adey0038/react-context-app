import { useWeather } from "../context/weatherContext.jsx";
import styles from "../styles/forecast.module.css";

const getTomorrowForecast = (list) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Use local date instead of UTC
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  const tomorrowDate = `${year}-${month}-${day}`; // "2026-04-02"

  return list.find((item) => item.dt_txt.startsWith(tomorrowDate));
};

export default function Forecast() {
  const { forecast, selectedLocation, locations } = useWeather();

  if (!locations || locations.length === 0) {
    return (
      <p className={styles.message}>
        Search for a location and Save the Result.
      </p>
    );
  }

  if (!selectedLocation) {
    return (
      <p className={styles.message}>
        Please select a location to get forecast.
      </p>
    );
  }

  if (!forecast) {
    return <p className={styles.message}>Loading forecast...</p>;
  }

  return (
    <div className={styles.forecast}>
      <h3>Tomorrow's Forecast for {selectedLocation.name}</h3>
      {(() => {
        const item = getTomorrowForecast(forecast.list);
        if (!item)
          return (
            <p className={styles.message}>
              No forecast available for tomorrow.
            </p>
          );
        return (
          <div className={styles.forecastGrid}>
            <div className={styles.forecastCard}>
              <img
                src={`https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
              <p>{item.weather[0].description}</p>
              <p>🌡️ Temp: {Math.round(item.main.temp)}°C</p> {/*Emojis*/}
              <p>💧 Humidity: {item.main.humidity}%</p>
              <p>💨 Wind: {item.wind.speed}m/s</p>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
