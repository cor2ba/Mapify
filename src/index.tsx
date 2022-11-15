/*eslint import/no-webpack-loader-syntax: off*/ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import {MapsApp} from './MapsApp';
//@ts-ignore
import maxboxgl from "!mapbox-gl"

maxboxgl.accessToken = 'pk.eyJ1IjoiY29yMmJhIiwiYSI6ImNsYWVsc2c2djAxc3czdnA5MjlwcWt4dm0ifQ.GfihRQsoqvoylo8SZhpuqg';

if(!navigator.geolocation){
  alert("Your navigator not have the geolocation option")
  throw new Error("Your navigator not have the geolocation option")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

