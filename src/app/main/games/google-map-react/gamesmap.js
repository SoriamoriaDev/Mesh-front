/*global google*/

import Tooltip from '@material-ui/core/Tooltip';
import LocationOn from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import React from 'react';
import { meshMapStyle } from 'app/mesh-files/meshStyles';


// GET YOUR CURRENT POSITION
var crd;

var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

function success(pos) {

	console.log("pos", pos)

	crd = pos.coords;

	console.log('Your current position is:');
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);
	console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



// Add a marker with react-google-maps API
function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<LocationOn style={{  fontSize:"50", color: "#55e7b5" }} > You</LocationOn>
		</Tooltip>
	);
}

// Add a marker with Google Maps API
function renderMarkers(map, maps){
	let marker = new maps.Marker({
	  position: {lat : 43.548056, lng : 6.948830},
	  map,
	  title: 'Game is on!',
	  draggable: false,
	  icon:{
		path: "M256,0C148.48,0,61,87.48,61,195c0,42.55,13.44,82.98,38.9,116.9l144.08,194.051c0.36,0.47,0.91,0.65,1.31,1.07 c7.2,7.71,17.59,5.77,22.72-1.07C309.5,450.591,385.55,347.2,414.79,308.2c0,0,0.01-0.03,0.02-0.05l0.18-0.24 C438.55,274.81,451,235.77,451,195C451,87.48,363.52,0,256,0z M256,300.2c-57.89,0-105.2-47.31-105.2-105.2S198.11,89.8,256,89.8 S361.2,137.11,361.2,195S313.89,300.2,256,300.2z",
		fillColor: "#55e7b5",
    	fillOpacity: 1,
		anchor: new google.maps.Point(256, 512),
    	strokeWeight: 0,
		scale : 0.1
		}
	})
}

function GamesMap() {
	return (
		<div className="w-full">
			<Typography className="h2 mb-16">Games around you</Typography>
			
			<div style={{ height: '70vh', width: '100%' }}>
				<GoogleMap
					bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
					yesIWantToUseGoogleMapApiInternals
					defaultZoom={14}
					defaultCenter={[43.553524, 7.001037]}
					//options={{ styles: stylesArray}}
					options={{ styles: meshMapStyle}}
					onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
				>
					<Marker text="You are here" lat="43.553524" lng="7.001037" />
				</GoogleMap>
			</div>
		</div>
	);
}

export default GamesMap;

