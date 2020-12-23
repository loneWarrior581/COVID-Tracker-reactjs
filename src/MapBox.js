import { tileLayer } from 'leaflet'
import React from 'react'
// import { Map as LeafletMap } from "react-leaflet";
import {  MapContainer as LeafletMap,MapContainer, TileLayer, Marker, Popup,Circle } from 'react-leaflet'
import './Map.css'

function MapBox({countries,center,zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* we want to loop through the countries and make the circles acording to the the number of cases */}
                {/* bigger circle means that the country has larger number of cases */}
            </LeafletMap>

        </div>
    )
}

export default MapBox
