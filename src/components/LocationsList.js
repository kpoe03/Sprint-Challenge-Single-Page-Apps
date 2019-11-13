import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => { setLocations(response.data.results) })
      .catch(error => console.log('Unexpected Error: ', error))
  }, [])

  return <section className="location-list grid-view">
    {locations.map((location, index) => <LocationCard key={index} location={location} />)}
  </section>
}