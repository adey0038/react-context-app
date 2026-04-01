import { useState, useEffect } from "react";
import { useWeather } from "../context/weatherContext.jsx";
import styles from "../styles/searchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchLocations, searchResults } = useWeather();

  useEffect(() => {
    if (searchResults === null) {
      setQuery(""); //clear input when location is saved
    }
  }, [searchResults]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (query.trim()) {
      searchLocations(query);
    }
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
          placeholder="Search for a city..."
        />
        <button type="submit">
          <span className="material-symbols-outlined">Search</span>
        </button>
      </form>
    </div>
  );
}
