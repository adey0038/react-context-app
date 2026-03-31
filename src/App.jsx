import Header from "./components/header.jsx";
import SearchBar from "./components/searchBar.jsx";
import SearchResults from "./components/searchResults.jsx";
import Locations from "./components/locations.jsx";
import LocationCard from "./components/locationCard.jsx";
import Forecast from "./components/forecast.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Weather App");
  const [subtitle, setSubtitle] = useState("Oluwafunke Adeyemo");

  return (
    <>
      <div className="App">
        <Header title={title} subtitle={subtitle} />

        <SearchBar />
        <SearchResults />

        <Locations>
          <LocationCard />
        </Locations>

        <Forecast location={location} />
      </div>
    </>
  );
}

export default App;
