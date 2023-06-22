import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Bandera() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getFlag();
  }, []);

  const getFlag = async () => {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
      setPositions(response.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Country Positions</h1>
      <ul>
        {positions.map((country, index) => (
          <div key={index}>
            <li>{country.name}</li>
            <img src={country.flag}></img>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Bandera;