import { tileLayer } from 'leaflet'
import React from 'react'
// import { Map as LeafletMap } from "react-leaflet";
import {  MapContainer as LeafletMap, TileLayer } from 'react-leaflet'
import './Map.css'
import {showDataOnMap} from './util'

function MapBox({countries,casesType,center,zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* we want to loop through the countries and make the circles acording to the the number of cases */}
                {/* bigger circle means that the country has larger number of cases */}
                {showDataOnMap(countries,casesType)}
            </LeafletMap>

        </div>
    )
}

export default MapBox
