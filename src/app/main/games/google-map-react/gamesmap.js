/*global google*/

import Tooltip from '@material-ui/core/Tooltip';
import GoogleMap from 'google-map-react';
import React, { useState, useEffect } from 'react';
import { meshMapStyle } from 'app/mesh-files/meshStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectGPSlocationEntities } from 'app/fuse-layouts/layout1/components/store/GPSlocationSlice';
import MapTarget from '../MapTarget';
import CreateGame from '../CreateGame';
import { Dialog } from '@material-ui/core';
import GameDetails from '../GameDetails';


function GamesMap(props) {


    
    const dispatch = useDispatch();

	const [StandardPosition, setStandardPosition] = useState({lat: 43.55345239521253, lng: 7.001061280250452 })
    const [isLocated, setIsLocated] = useState(false)
    const [centerMap, setCenterMap] = useState({})


	const [counter, setCounter] = useState(0)
	const [showTarget, setShowTarget] = useState(false)
	const [showCreateDialog, setShowCreateDialog] = useState(false)
	const [showGameDialog, setShowGameDialog] = useState(false)
	const [selectedGame, setSelectedGame] = useState("")
	
	let [games, setGames] = useState(props.data)
	let realPosition = useSelector(selectGPSlocationEntities)
    
    useEffect(() => { 

        setGames(props.data)

        if(props.createGame > counter){
            setShowTarget(true)
            setCounter(counter + 1)
        }

    }, [props])


    function success(position){

        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        //console.log("Success, position  : ", currentPosition)

        setStandardPosition(currentPosition);

    };

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(  success )

    }, [])

    
	
	const onGoogleApiLoadedFunction = (map, maps) => {


        // // Add markers with Google Maps API
		// if(games && games.length > 0){
		// 	for (let i = 0; i < games.length; i++) {

		// 		// eslint-disable-next-line 
		// 		let marker = new maps.Marker({
        //             position: {lat : games[i].latitude, lng : games[i].longitude},
        //             map,
        //             title: games[i].venue_name,
        //             draggable: false,
        //             icon:{
        //                 path: "M256,0C148.48,0,61,87.48,61,195c0,42.55,13.44,82.98,38.9,116.9l144.08,194.051c0.36,0.47,0.91,0.65,1.31,1.07 c7.2,7.71,17.59,5.77,22.72-1.07C309.5,450.591,385.55,347.2,414.79,308.2c0,0,0.01-0.03,0.02-0.05l0.18-0.24 C438.55,274.81,451,235.77,451,195C451,87.48,363.52,0,256,0z M256,300.2c-57.89,0-105.2-47.31-105.2-105.2S198.11,89.8,256,89.8 S361.2,137.11,361.2,195S313.89,300.2,256,300.2z",
        //                 fillColor: "#55e7b5",
        //                 fillOpacity: 1,
        //                 anchor: new google.maps.Point(256, 512),
        //                 strokeWeight: 0,
        //                 scale : 0.1
        //                 }
        //         })
                
		// 	}
        // }
        
        // Fetch coordinate of center of map
        map.addListener("center_changed", () => {
            
            let coord = map.getCenter().toJSON();
            setCenterMap(coord)
            //console.log("GPS coord of center of map : ", test)

          });
    }
    
    // Function not used for the moment
    function clearMarkers(map, maps) {

        console.log("clearMarkers...")

        for (let i = 0; i < games.length; i++) {

            let marker = new maps.Marker(null)

        }
    }




    // eslint-disable-next-line 
    function Marker({ text, data }) {

        
        return (

            <div onClick={() => openGameDialog(data)} style={{cursor: 'pointer'}}>
                
                <Tooltip title={text} placement="top">

                    <svg 
                    height="512" 
                    width="512" 
                    style={{
                        fill: "#55e7b5", 
                        transform: "scale(0.1) translate(-2560px, -2816px)" //PROBLEM - TO BE FIXED - element take too much space
                        }}>
                        <path d="M256,0C148.48,0,61,87.48,61,195c0,42.55,13.44,82.98,38.9,116.9l144.08,194.051c0.36,0.47,0.91,0.65,1.31,1.07 c7.2,7.71,17.59,5.77,22.72-1.07C309.5,450.591,385.55,347.2,414.79,308.2c0,0,0.01-0.03,0.02-0.05l0.18-0.24 C438.55,274.81,451,235.77,451,195C451,87.48,363.52,0,256,0z M256,300.2c-57.89,0-105.2-47.31-105.2-105.2S198.11,89.8,256,89.8 S361.2,137.11,361.2,195S313.89,300.2,256,300.2z" />
                    </svg>

                </Tooltip>
            </div>

        );
    }

    function closeMapTarget(){

        //console.log("closeMapTarget...")
        setShowTarget(false)

    }

    function openCreateDialog(){

        //console.log("openCreateDialog...")
        setShowTarget(false)
        setShowCreateDialog(true)

    }

    function closeCreateDialog(){

        //console.log("closeCreateDialog...")
        setShowCreateDialog(false)

    }

    function openGameDialog(data){

        setSelectedGame(data)
        setShowGameDialog(true)

    }

    function closeGameDialog(){

        console.log("closeGameDialog...")
        setShowGameDialog(false)

    }

    let games_markers = games.map((game, index) => (

        <Marker key={index} text={game.venue_name} lat={game.latitude} lng={game.longitude} data={game} />

    ));

	// if (_.isEmpty(position)) {
	// 	return null;
    // }

	return (
		<div className="w-full">
			
			<div id="ici" style={{ height: '70vh', width: '100%' }}>

                {showTarget ? <MapTarget data="Click here" onChildClick={closeMapTarget}  onChooseLocationClick={openCreateDialog}/> : ""}

				<GoogleMap
					bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={13}
					center={ isLocated ? [realPosition.lat, realPosition.lng] : [StandardPosition.lat, StandardPosition.lng]}
					options={{ zIndex: 0, styles: meshMapStyle, fullscreenControl:false}}
                    onGoogleApiLoaded={({ map, maps }) => { 
                        
                        onGoogleApiLoadedFunction(map, maps);

                    }}
				>
                        
                    {games_markers}

				</GoogleMap>

                <Dialog
                    open={showCreateDialog}
                    onClose={closeCreateDialog}
                >

                    <CreateGame props={props} centerMap={centerMap} onSaveClick={closeCreateDialog}/> 

                </Dialog>

                <Dialog
                    open={showGameDialog}
                    onClose={closeGameDialog}
                >

                    <GameDetails props={props} gameData={selectedGame} onCrossClick={closeGameDialog}/> 

                </Dialog>

			</div>
		</div>
	);
}

export default GamesMap;

