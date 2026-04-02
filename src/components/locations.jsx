import { useWeather } from "../context/weatherContext.jsx";
import LocationCard from "./locationCard.jsx";
import styles from "../styles/locations.module.css";

export default function Locations() {
  const { locations } = useWeather();

  if (!locations || locations.length === 0)
    return <p className={styles.message}>No Saved locations</p>;

  return (
    <div className={styles.locations}>
      <h3>Saved Locations</h3>
      {locations.map((loc) => (
        <LocationCard key={`${loc.lat}-${loc.lon}`} location={loc} />
      ))}
    </div>
  );
}
