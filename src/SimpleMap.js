import React from 'react';
import DeckGL from 'deck.gl';
import { StaticMap } from 'react-map-gl';
export class SimpleMap extends React.Component {
 render() {
     return(
        <React.Fragment>
        <DeckGL
         initialViewState={{
         longitude: -6.266155,
         latitude: 53.350140,
         zoom: 12
         }}
         height="100%"
         width="100%"
         controller={true} 
        >
          <StaticMap
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken="pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrcnh0OWk3ZTB0cGoydnFub2Fxb2ZpcXQifQ.qNdkWKko5Ij3B0BmyojrYw"
           />
        </DeckGL>
       </React.Fragment>
    );   
 }
}
