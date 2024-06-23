// src/components/ViewPlaces.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';


const ViewPlaces = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'places'));
        let placesData = [];
        querySnapshot.forEach((doc) => {
          placesData.push({ id: doc.id, ...doc.data() });
        });
        setPlaces(placesData);
      } catch (error) {
        console.error('Error fetching places: ', error);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div>
      <h2>Places List</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <strong>{place.placename}</strong> - Duration: {place.duration}, Price: {place.price}
            <br />
            Description: {place.description}
            <br />
            {place.discountPrice && <span>Discount Price: {place.discountPrice}</span>}
            <br />
            {place.image && <img src={place.image} alt={place.placename} style={{ maxWidth: '200px' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPlaces;
