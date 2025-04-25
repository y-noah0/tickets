"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { MdLocationOn } from 'react-icons/md';
import { renderToStaticMarkup } from 'react-dom/server';

// Create a divIcon using the MdLocationOn React icon
const createLocationIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <MdLocationOn className="text-red-500 w-8 h-8" />
  );
  return divIcon({
    html: iconMarkup,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point (center bottom of the icon)
    popupAnchor: [0, -32], // Popup position relative to the icon
    className: 'custom-marker' // Optional: Add a class for additional styling if needed
  });
};

const MapComponent = ({ latitude, longitude, popupText = "Event Location", zoom = 13 }) => {
  // Ensure coordinates are numbers
  const position = [parseFloat(latitude), parseFloat(longitude)];
  
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={position} 
        zoom={zoom} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={createLocationIcon()}>
          <Popup>
            <div className="flex items-center">
              <MdLocationOn className="text-red-500 mr-1 w-5 h-5" />
              <span>{popupText}</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;