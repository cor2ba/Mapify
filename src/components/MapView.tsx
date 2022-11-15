/*eslint import/no-webpack-loader-syntax: off*/ 
import { useContext, useRef, useLayoutEffect } from "react";
import { PlacesContext } from "../context/places";
import { Loading } from "./";
//@ts-ignore
import { Map } from "!mapbox-gl";
import { MapContext } from "../context";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);

  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        backgroundColor: "transparent",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
};
