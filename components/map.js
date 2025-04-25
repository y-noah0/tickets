"use client";

import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdError, MdMap } from 'react-icons/md';
import dynamic from 'next/dynamic';

// This placeholder component will be shown during loading
const MapPlaceholder = () => (
  <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
    <MdMap className="text-gray-400 text-4xl mb-2 animate-pulse" />
    <p className="text-gray-500">Loading map...</p>
  </div>
);

// Dynamically import the map components with no SSR
const MapComponent = dynamic(
  () => import('./MapComponent'), 
  { 
    loading: MapPlaceholder,
    ssr: false // This is critical - prevents SSR for this component
  }
);

const Map = (props) => {
  // Handle when coordinates are not provided
  if (!props.latitude || !props.longitude) {
    return (
      <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
        <MdError className="text-gray-400 text-4xl mb-2" />
        <p className="text-gray-500">Location not available</p>
      </div>
    );
  }
  
  return <MapComponent {...props} />;
};

export default Map;