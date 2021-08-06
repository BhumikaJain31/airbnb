import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { Marker, Popup } from 'react-map-gl';

function Map({searchResults}) {

     const [selectedLocation, setselectedLocation] = useState({});
    // Transform search results in to long and lat value

    const coordinates = searchResults.map(
        result => ({
           longitude: result.long,
           latitude: result.lat,
        })
    )

    const center = getCenter(coordinates);

    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/bhumikajain31/cks0iepdg3tu818p6n5kmf1e0'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker  longitude={result.long}
                    latitude={result.lat}
                    offsetLaft={-20}
                    offsetTop={-10}>
                        <p onClick={() => setselectedLocation(result)}
                          className="cursor-pointer text-2xl animate-bounce"
                          aria-label="push-pin"
                        >📌</p>
                    </Marker>

                    {/* Popup to show if markup got clicked */}

                    {selectedLocation.long === result.long ? (
                        <Popup 
                        onClose={() => setselectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}>
                            {result.title}
                        </Popup>
                    ):(
                        false)
                    }
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
