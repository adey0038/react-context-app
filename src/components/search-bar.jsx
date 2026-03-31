import styles from "../styles/search-bar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search for a location..." />
      <button>Search</button>
    </div>
  );
}
