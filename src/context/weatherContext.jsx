import { useEffect, useState, useContext, createContext } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  //Load
  useEffect(() => {
    const saved = localStorage.getItem("locations");
    if (saved) {
      setLocations(JSON.parse(saved));
    }
  }, []);

  //Add location
  const addLocation = (loc) => {
    if (locations.length >= 5) {
      alert(
        "You can only save up to 5 locations. Please remove one to add a new one.",
      );
      return;
    }
    setLocations((prev) => {
      const updated = [...prev, loc];
      localStorage.setItem("locations", JSON.stringify(updated));
      return updated;
    });
    setSearchResults(null); //this clear the search results
  };

  //Remove location
  const removeLocation = (lat, lon) => {
    setLocations((prev) => {
      const updated = prev.filter((l) => !(l.lat == lat && l.lon == lon));
      localStorage.setItem("locations", JSON.stringify(updated));
      return updated;
    });
    if (selectedLocation?.lat === lat && selectedLocation?.lon === lon) {
      setSelectedLocation(null);
      setForecast(null);
    }
  };

  //Search location using Geocoding API ref
  const searchLocations = async (query) => {
    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.length === 0) {
        setSearchResults([]);
      } else {
        setSearchResults(data);
      }
    } catch (err) {
      console.error("Error while searching locations", err);
      setSearchResults([]);
    }
  };

  //Fetch forecast
  const getForecast = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      setForecast(data);
    } catch (err) {
      console.error("Unable to get forecast", err);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        locations,
        addLocation,
        removeLocation,
        searchResults,
        searchLocations,
        forecast,
        getForecast,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
