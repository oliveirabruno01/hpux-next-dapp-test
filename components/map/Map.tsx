import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import  "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { DraggableMarker } from './Marker'

import styles from './Map.module.scss'
import { LatLngExpression } from "leaflet";

interface MapProps {}

const LatLng: LatLngExpression = [44.192246, -77.398246]

const Map: React.FC<MapProps> = ({}) => {
  return (
    <MapContainer
      center={LatLng}
      zoom={22}
      scrollWheelZoom={false}
      on
      style={{ height: "100%", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* <Marker position={[44.192246, -77.398246]} draggable={true}>
        <Popup>Hey ! you found me</Popup>
      </Marker> */}
      <DraggableMarker initLatLng={LatLng}></DraggableMarker>
    </MapContainer>
  );
};

export default Map;