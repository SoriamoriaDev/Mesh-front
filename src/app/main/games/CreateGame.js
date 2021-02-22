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



function CreateGame(props) {

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');
	const dispatch = useDispatch(); 

    const [latitude, setLatitude] = useState("")
	const [longitude, setLongitude] = useState("")
	const [venue_name, setVenue_name] = useState("")
	const [date, setDate] = useState(new Date)
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
            owner: me._id,
            min_players: min_players,
            max_players: max_players


		}

		dispatch(createNewGame(game));


	}

	useEffect(() => {
        
        setLatitude(props.centerMap.lat)
		setLongitude(props.centerMap.lng)
		
		
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
		<div>

			
				<AppBar position="static">
					<Toolbar className="flex w-full">
						<Typography variant="subtitle1" color="inherit">
							Create a new game
						</Typography>
					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

					<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>

                        <TextField
							className="mt-8 mb-16"
							label="Latitude"
							id="subject"
							name="subject"
							value={latitude}
							variant="outlined"
                            fullWidth
                            disabled
                            
						/>

                        <TextField
							className="mt-8 mb-16"
							label="Longitude"
							id="subject"
							name="subject"
							value={longitude}
							variant="outlined"
                            fullWidth
                            disabled
						/>
                        
                        <TextField
							className="mt-8 mb-16"
							label="Venue name"
							// autoFocus
							value={venue_name}
							onChange={e => setVenue_name(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						

						<TextField
							className="mt-8 mb-16"
							label="Date"
							id="bcc"
							name="bcc"
							value={date}
							onChange={e => setDate(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Time from"
							id="bcc"
							name="bcc"
							value={time_from}
							onChange={e => setTime_from(e.target.value)}
							variant="outlined"
							fullWidth
						/>

						<TextField
							className="mt-8 mb-16"
							label="Time to"
							id="bcc"
							name="bcc"
							value={time_to}
							onChange={e => setTime_to(e.target.value)}
							variant="outlined"
							fullWidth
						/>

						<TextField
							className="mt-8 mb-16"
                            label="Minimum players"
							id="bcc"
							name="bcc"
							value={min_players}
							onChange={e => setMin_players(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Maximum players"
							id="bcc"
							name="bcc"
							value={max_players}
							onChange={e => setMax_players(e.target.value)}
							variant="outlined"
							fullWidth
						/>

						<TextField
							className="mt-8 mb-16"
							label="Public or Private"
							id="bcc"
							name="bcc"
							value={isPublic}
							onChange={e => setIsPublic(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Type of game"
							id="bcc"
							name="bcc"
							value={game_type}
							onChange={e => setGame_type(e.target.value)}
							variant="outlined"
							fullWidth
						/>

						<TextField
							className="mt-8 mb-16"
                            label="Team to invite"
							id="bcc"
							name="bcc"
							value={team_first}
							onChange={e => setTeam_first(e.target.value)}
							variant="outlined"
							fullWidth
							//required
						/>

						<TextField
							className="mt-8 mb-16"
							label="Comments"
							id="bcc"
							name="bcc"
							value={comments}
							onChange={e => setComments(e.target.value)}
                            variant="outlined"
                            multiline={true}
							fullWidth
						/>

						<br/>

						<br/>
						<br/>


					</DialogContent>

					<DialogActions className="justify-between p-8">
						<div className="px-16">
							<Button variant="contained" color="primary" onClick={handleSave}>
								Create
							</Button>
						</div>
					</DialogActions>

				</div>
			
		</div>
	);
}

export default withRouter(CreateGame);
