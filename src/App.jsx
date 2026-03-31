import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar.jsx";
import SearchResults from "./components/searchResults.jsx";
import Locations from "./components/locations.jsx";
import Forecast from "./components/forecast.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <SearchBar />
      <SearchResults />

      <Locations />

      <Forecast />
    </>
  );
}

export default App;
