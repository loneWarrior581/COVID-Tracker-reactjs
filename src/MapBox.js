import { tileLayer } from 'leaflet'
import React from 'react'
// import { Map as LeafletMap } from "react-leaflet";
import {  MapContainer as LeafletMap,MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

function MapBox({center,zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </LeafletMap>

        </div>
    )
}

export default MapBox
