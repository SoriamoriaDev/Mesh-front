/*global google*/

import Tooltip from '@material-ui/core/Tooltip';
import LocationOn from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';
import React, { useState, useEffect } from 'react';
import { meshMapStyle } from 'app/mesh-files/meshStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectGPSlocationEntities } from 'app/fuse-layouts/layout1/components/store/GPSlocationSlice';



// Add a marker with react-google-maps API
// eslint-disable-next-line 
function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<LocationOn style={{  fontSize:"50", color: "#55e7b5" }} > You</LocationOn>
		</Tooltip>
	);
}


function GamesMap(data) {
	
	const dispatch = useDispatch();

	// eslint-disable-next-line 
	const [StandardPosition, setStandardPosition] = useState({lat : 43.553524, lng : 7.001037})
	// eslint-disable-next-line 
	const [isLocated, setIsLocated] = useState(false)
	
	let games = data.data
	let realPosition = useSelector(selectGPSlocationEntities)
	
	console.log("GPSlocation", realPosition)

	useEffect(() => { 

			//dispatch(sendGPSLocation())
			console.log("useEffect in gamesmap")
			//setPosition(GPSlocation)

	}, [dispatch])

	// Add a marker with Google Maps API
	function renderMarkers(map, maps){
		
		if(games && games.length > 0){
			for (let i = 0; i < games.length; i++) {
				// eslint-disable-next-line 
				let marker = new maps.Marker({
				position: {lat : games[i].latitude, lng : games[i].longitude},
				map,
				title: games[i].venue_name,
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
		}
	}

	// if (_.isEmpty(position)) {
	// 	return null;
	// }

	return (
		<div className="w-full">
			
			<div style={{ height: '70vh', width: '100%' }}>
				<GoogleMap
					bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
					yesIWantToUseGoogleMapApiInternals
					defaultZoom={13}
					//defaultCenter={[43.553524, 7.001037]}
					//defaultCenter={[coord.lat, coord.lng]}
					//defaultCenter={[43.269909, 5.395969]}
					center={ isLocated ? [realPosition.lat, realPosition.lng] : [StandardPosition.lat, StandardPosition.lng]}
					options={{ styles: meshMapStyle}}
					onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
				>
					{/* <Marker text="You are here" lat="43.553524" lng="7.001037" /> */}
				</GoogleMap>
			</div>
		</div>
	);
}

export default GamesMap;

