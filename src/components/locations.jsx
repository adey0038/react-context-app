import styles from "../styles/location.modile.css";

export default function LocationCard({ location }) {
  return (
    <div className={styles.card}>
      <h3>{location.name}</h3>
      <p>{location.description}</p>
    </div>
  );
}
