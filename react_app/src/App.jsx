import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css'
import './mapbox.css'


function App() {

    // Persist map instance
    const mapRef = useRef()
    const mapContainerRef = useRef()        // Expose map container HTML element

    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_PUBLIC
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-78.48230, 38.03104],
            zoom: 9
        });

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <>
            <div id='map-container' ref={mapContainerRef}/>
        </>
    )
}

export default App
