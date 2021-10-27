import React from 'react';
import DeckGL from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import {IconLayer} from '@deck.gl/layers';

// data needed for overlay here
const data = [{
 name: "random-name",
 color: [100, 147, 245],
 coordinates:[[-2.1, 57.15],
    [-3.8655, 56.61811111],
    [-8.666888889, 54.08280556],
    [5.136111111, 51.87888889],
    [-6.716944444, 52.39388889],
    [-8.79, 52.56388889],
    [-7.837761111, 52.12463194],
    [-7.509618056, 52.823625],
    [-3.776111111, 56.06694444],
    [-8.513333333, 38.3725] 
        ]}
]

const ICON_MAPPING = {
    marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
  };

function App({data, viewState}) {
    const INITIAL_VIEW_STATE = {
        latitude: 31.781929,
        longitude: 76.993894,
        zoom: 2,
        pitch: 30,
        bearing: 0
      };
 const layer = 
   new IconLayer({
    id: "icon-layer",
    data: [{coordinates:[-7.837761111, 52.12463194]}],
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: 'https://img.icons8.com/dusk/64/000000/user-location.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',
    sizeScale: 15,
    getPosition: d => d.coordinates,
    getSize: d => 15,
    getColor: d => [Math.sqrt(d.exits), 140, 0] 
  });
 
 return (
    <React.Fragment>
    <DeckGL
     initialViewState={INITIAL_VIEW_STATE}
     height="100%"
     width="100%"
     controller={true} 
     viewState={viewState}
     layers={[layer]}
     getTooltip={({object}) => object && `${object.name}\n${object.address}`}
    >   
    <StaticMap
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxApiAccessToken="pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrcnh0OWk3ZTB0cGoydnFub2Fxb2ZpcXQifQ.qNdkWKko5Ij3B0BmyojrYw"
    />      
    </DeckGL>
   </React.Fragment>
); 
}  

export default App;
