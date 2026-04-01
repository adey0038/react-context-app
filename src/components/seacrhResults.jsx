import { useWeather } from "../context/weatherContext";
import styles from "../styles/search-results.module.css";

export default function SearchResults() {
  const { searchResults, addLocation } = useWeather();

  if (searchResults === null) return null;

  if (searchResults.length === 0) {
    return <p>No results found. Try another location.</p>;
  }
  return (
    <div className={styles.searchResults}>
      {searchResults.map((result) => (
        <div className={styles.resultCard} key={`${result.lat}-${result.lon}`}>
          <div className={styles.resultInfo}>
            <span>{result.name}</span>
            <span>{result.country ?? ""}</span>
            <span>{result.state ?? ""}</span>
          </div>
          <button onClick={() => addLocation(result)}>Save</button>
        </div>
      ))}
    </div>
  );
}
