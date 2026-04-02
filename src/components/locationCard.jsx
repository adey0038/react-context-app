import { useWeather } from "../context/weatherContext.jsx";
import styles from "../styles/locationCard.module.css";

export default function LocationCard({ location }) {
  const { removeLocation, getForecast, selectedLocation, setSelectedLocation } =
    useWeather();

  const isSelected =
    selectedLocation?.lat === location.lat &&
    selectedLocation?.lon === location.lon;

  const handleSelect = () => {
    setSelectedLocation(location);
    getForecast(location.lat, location.lon);
  };

  const handleRemove = (ev) => {
    ev.stopPropagation();
    removeLocation(location.lat, location.lon);
  };

  return (
    <div
      className={`${styles.locationCard} ${isSelected ? styles.selected : ""}`}
      onClick={handleSelect}
    >
      <div className={styles.locationInfo}>
        <h4>{location.name}</h4>
        <p>
          {location.state ?? ""}, {location.country}
        </p>
        <span>{location.lat}</span>
        <span>{location.lon}</span>
      </div>
      <button className={styles.removeBtn} onClick={handleRemove}>
        <span className="material-symbols-outlined">delete</span>
        Remove
      </button>
    </div>
  );
}
