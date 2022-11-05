import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Weather from "./Weather";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLong] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          setIsLoading(false);
        },
        (error) => {
          alert(error);
        }
      );
    } else {
      alert("Your browser does not support geolocation!");
    }
  });

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="content">
        <p>
          Position: {lat.toFixed(3)}, {lon.toFixed(3)}
        </p>
        <Weather lat={lat} lon={lon} />
      </div>
    );
  }
}

export default App;
