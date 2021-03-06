import React, { useState } from "react";
import "./Map.css";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  const [map, setmap] = useState(null);
  if (map) {
    map.flyTo(center);
  }
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} whenCreated={setmap} maxZoom={14}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
