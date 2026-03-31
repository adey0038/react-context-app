import styles from "../styles/forecast.module.css";

export default function Forecast({ location }) {
  return (
    <div className={styles.forecast}>
      <h2>Weather Forecast for {location}</h2>
      {/* Forecast details go here */}
    </div>
  );
}
