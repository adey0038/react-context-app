# Weather Forecast App

**By Oluwafunke Adeyemo**

A React weather application built using the Context API to demonstrate shared state management across multiple components.

---

## Description

This app allows users to search for locations around the world, save up to 5 favourite locations, and view tomorrow's weather forecast for any selected location. It uses the OpenWeatherMap API for geocoding and forecast data.

---

## Features

- Search for locations using the OpenWeatherMap Geocoding API
- Save up to 5 locations (persisted in localStorage)
- Remove saved locations
- View tomorrow's weather forecast for a selected location
- Dark mode support
- Responsive design

---

## Technologies Used

- React 18
- Vite
- React Context API
- useState / useEffect hooks
- OpenWeatherMap API
- CSS Modules
- Material Symbols (Google Icons)
- localStorage

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/adey0038/react-context-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder:

```
VITE_API_KEY=your_openweathermap_api_key
```

4. Run the app:

```bash
npm run dev
```

---

## API Key

This app requires an OpenWeatherMap API key:

1. Sign up at [openweathermap.org](https://openweathermap.org)
2. Generate an API key
3. Add it to your `.env` file as shown above

> Note: New API keys can take up to 2 hours to activate.

---

## Project Structure

```
src/
├── context/
│   └── weatherContext.jsx
├── components/
│   ├── header.jsx
│   ├── searchBar.jsx
│   ├── searchResults.jsx
│   ├── locations.jsx
│   ├── locationCard.jsx
│   └── forecast.jsx
├── styles/
│   ├── header.module.css
│   ├── searchBar.module.css
│   ├── search-results.module.css
│   ├── locations.module.css
│   ├── locationCard.module.css
│   └── forecast.module.css
├── App.jsx
├── main.jsx
└── index.css
```

---

## Notes

- Maximum of 5 saved locations allowed
- Forecast data updates each time a location is selected
- Locations persist across page refreshes via localStorage
