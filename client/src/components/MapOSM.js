import React, { useState, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

function MapOSM (props) {
  const [response, setResponse] = useState(null);

  const hasTwoAddresses = (
    props.pickUpAddress !== '' &&
    props.dropOffAddress !== ''
  );

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setResponse(response);
    }
  };

  const position = [51.505, -0.09];

  return (

      <Map center={position} zoom={13} style={{height:"300px"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>

  );
}

export default MapOSM;