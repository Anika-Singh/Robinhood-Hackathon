import { useState } from "react";
import "./App.css";
import SocialCard from "./SocialCard";
import {
  withScriptjs,
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import { useEffect } from "react";
import crimeData from "./crime.json";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "90vw",
};

const center = {
  lat: 30.267153,
  lng: -97.743057,
};

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(data)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '-',
    libraries,
  });
  

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://data.austintexas.gov/resource/x5p7-qyuv.json?$limit=1000");
        userData = await response.json();
        console.log(userData)
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.project_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  console.log(crimeData)

  return (
    <div className="App" style={{
      backgroundColor: '#7db9b3'}}>
      <h1 align="center">Available Housing Complexes</h1>

      <GoogleMap id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}>
            {crimeData.map(crime => (
              <Marker
                key={crime.incident_report_number}
                position={{
                  lat: parseFloat(crime.latitude),
                  lng: parseFloat(crime.longitude)
                }}
              />
            ))}
            {users.map(users => (
              <Marker
                key={users.project_id}
                icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                position={{
                  lat: parseFloat(users.latitude),
                  lng: parseFloat(users.longitude)
                }}
              />
            ))}
    
        </GoogleMap>
      <br></br>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container" align="center">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;