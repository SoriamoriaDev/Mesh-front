import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
//import { createNewTeam, clearNewTeam } from './store/teamsSlice';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import { createNewGame, getGames } from './store/gamesSlice';
import dayjs from 'dayjs'



function GameDetails(props) {

    console.log("props.gameData : ", props.gameData)

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');
	const dispatch = useDispatch(); 

    const [latitude, setLatitude] = useState("")
	const [longitude, setLongitude] = useState("")
	const [venue_name, setVenue_name] = useState("")
	const [date, setDate] = useState("")
	const [time_from, setTime_from] = useState("")
    const [time_to, setTime_to] = useState("")
    const [min_players, setMin_players] = useState(6)
	const [max_players, setMax_players] = useState(10)
    const [game_type, setGame_type] = useState("")
    const [isPublic, setIsPublic] = useState(true)
    const [comments, setComments] = useState("")
    const [team_first, setTeam_first] = useState("")
    const [team_second, setTeam_second] = useState("")
    
	
	const me = useSelector(({ auth }) => auth.user);
	const newGame = useSelector(({ games }) => games.games.newGame);

	function handleSave() {

		console.log("Saved! :)")
		
		let game = {
			
            venue_name: venue_name, 
            latitude: latitude,
            longitude: longitude,
            date: date,
            public: isPublic,
            status: "open", 
            owner: me._id

		}

		//dispatch(createNewGame(game));


	}

	useEffect(() => {
        
        setLatitude(props.gameData.latitude)
		setLongitude(props.gameData.longitude)
		setMin_players(props.gameData.min_players)
		setMax_players(props.gameData.max_players)
		setDate(props.gameData.date)
		setVenue_name(props.gameData.venue_name)
		
		
    }, [])
    
	useEffect(() => {
		
		if(newGame !== undefined){

			swal("Yes !", "Game on :)", {button: false, icon: "success",} );

			setTimeout( () => {

				//props.history.push(`/teams/team/${newTeam._id}`)
                //props.history.push(`/games`)
                
                window.location.reload() // TO FIX ONE DAY

			} , 2000)
			

		}
		
	}, [newGame])


	return (
		<div style={{width: 320}}>

			
				<AppBar position="static">
					<Toolbar className="flex w-full">
						<Typography variant="subtitle1" color="inherit">
							Game details
						</Typography>
					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

                    <br/>

                    <div style={{fontSize: 20, textAlign: "center"}}>
                        {dayjs(date).format('dddd DD/MM/YYYY')} at {dayjs(date).format('HH:mm')}
                    </div>

                    <br/>

                    <div style={{fontSize: 20, textAlign: "center"}}>
                        {venue_name}
                    </div>

                    <br/>
                    <br/>

                    <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>

                        <img src={me.data.photoURL ? me.data.photoURL : "/assets/images/avatars/avatar.png"} 
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />

                        <img src="/assets/images/avatars/avatar.png"
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 30,
                                //marginRight: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />

                        <img src="/assets/images/avatars/avatar.png"
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 30,
                                //marginRight: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />

                        <img src="/assets/images/avatars/avatar.png"
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 30,
                                //marginRight: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />

                        <img src="/assets/images/avatars/avatar.png"
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 30,
                                //marginRight: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />
                        
                        <img src="/assets/images/avatars/avatar.png"
                            alt="avatar" 
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 90 / 2,
                                borderColor: "white",
                                borderWidth: 3,
                                objectFit: "cover",
                                margin: 15
                                //display: "inline-block",
                                //marginLeft: 30,
                                //marginRight: 20
                                //marginLeft: "auto",
                                //marginRight: "auto"
                            }}
                        />

                    </div>

					<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>

                        
						
						<br/>

						<br/>
						<br/>


					</DialogContent>

					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button variant="contained" color="primary" onClick={handleSave}>
								Save
							</Button>
						</div>
					</DialogActions>

				</div>
			
		</div>
	);
}

export default withRouter(GameDetails);
