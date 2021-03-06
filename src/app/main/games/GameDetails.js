import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import { clearGamePlayers, getGamePlayers, joinGame } from './store/gamesSlice';
import dayjs from 'dayjs'
import { LocationOn } from '@material-ui/icons';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { CircularProgress, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    layoutRoot: {},
    // addPlayer: {
    //     //backgroundColor: "grey",
    //     backgroundImage: "url('/assets/images/avatars/avatar.png')",
    //     overflow: "hidden",
    //     height: "100%",
    //     zIndex: 2
    // }
    test: {
        //backgroundColor: "grey",
        backgroundImage: "url('/assets/images/avatars/max.jpg')",
        // overflow: "hidden",
        // height: "100%",
        // zIndex: 2
    },
    joinButton: {
		// position: 'absolute',
		// right: 12,
		// top: 53,
		// zIndex: 99
	},
}));


function GameDetails({gameData, onCrossClick}) {

    //console.log("gameData : ", gameData)

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');
	const dispatch = useDispatch(); 
    //const classes = useStyles(props);

    const [latitude, setLatitude] = useState("")
	const [longitude, setLongitude] = useState("")
	const [venue_name, setVenue_name] = useState("")
	const [date, setDate] = useState("")
	const [time_from, setTime_from] = useState("")
    const [time_to, setTime_to] = useState("")
    const [min_players, setMin_players] = useState("")
	const [max_players, setMax_players] = useState("")
    const [game_type, setGame_type] = useState("")
    const [isPublic, setIsPublic] = useState(true)
    const [comments, setComments] = useState("")
    const [team_first, setTeam_first] = useState("")
    const [team_second, setTeam_second] = useState("")

    const [bubbles_min, setBubbles_min] = useState("")
    const [bubbles_max, setBubbles_max] = useState("")
    const [bubbles_all, setBubbles_all] = useState("")
    
	const me = useSelector(({ auth }) => auth.user);
	const playersConfirmed = useSelector(({ games }) => games.games.gamePlayers);
    

	function handleJoin() {

		//console.log("Join Game! :)")

        let list_players_confirmed = []

        list_players_confirmed = gameData.user_confirm.map(user => user.user_id)

        //console.log("list_players_confirmed : ", list_players_confirmed)
		
		let payload = {
			
            gameID: gameData._id, 
            userID: me._id,
            list_players_already_confirmed : list_players_confirmed

		}

		dispatch(joinGame(payload));
        swal("Nice !", "Your are in :)", { icon: "success",} );


	}

	useEffect(() => {

        setLatitude(gameData.latitude)
		setLongitude(gameData.longitude)
		setMin_players(gameData.min_players)
		setMax_players(gameData.max_players)
		setDate(gameData.date)
		setVenue_name(gameData.venue_name)

        let list_players_confirmed = []

        list_players_confirmed = gameData.user_confirm.map(user => user.user_id)

        dispatch(getGamePlayers(list_players_confirmed));

        return () => {

            dispatch(clearGamePlayers());

        };
		
    }, [])

    useEffect(() => {

        //console.log("playersConfirmed changed...  : ", playersConfirmed)


        let not_confirmed = max_players - gameData.user_confirm.length

        let copy_playersConfirmed

        copy_playersConfirmed = Object.assign([], playersConfirmed);

        for(let i = 0 ; i < not_confirmed ; i++){

            copy_playersConfirmed.push( {f_name: "Available spot", data : { photoURL : "/assets/images/avatars/avatar_dark.png" }} )

        }

        //console.log("copy_playersConfirmed (Bubbles_all) : ", copy_playersConfirmed)

        setBubbles_all(copy_playersConfirmed)

    }, [playersConfirmed])



    useEffect(() => {


        if(bubbles_all && bubbles_all.length > 0){

            let min = ""
        
            min = [...Array(min_players)].map((player, index) => (

                <img key={index} src={bubbles_all[index].data.photoURL} 
                    alt="avatar" 
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 90 / 2,
                        borderColor: "white",
                        borderWidth: 2,
                        objectFit: "cover",
                        margin: 15
                    }}
                />

            ))

            setBubbles_min(min)

        }

        if(bubbles_all && bubbles_all.length > 0){

            let max = ""
        
            max = [...Array(max_players - min_players)].map((player, index) => (

                <img key={index+min_players} src={bubbles_all[index+min_players].data.photoURL} 
                    alt="avatar" 
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 90 / 2,
                        borderColor: "white",
                        borderWidth: 2,
                        objectFit: "cover",
                        margin: 15
                    }}
                />
                
            ))

            setBubbles_max(max)

        }
     
    }, [bubbles_all])



	return (

		<div style={{width: 320}}>

			
				<AppBar position="static">
					<Toolbar className="flex w-full">

						<Typography variant="subtitle1" color="inherit">
							Game details
						</Typography>

                        {/* <CloseIcon style={{marginLeft: "auto", fontSize: 25}} onClick={onCrossClick}/> */}
                        <CloseIcon style={{marginLeft: "auto", fontSize: 25, cursor: "pointer"}} onClick={onCrossClick}/>

					</Toolbar>
				</AppBar>

				<div className="flex flex-col">

                    <br/>

                    <div style={{fontSize: 16, textAlign: "center"}}>

                        <EventAvailableIcon style={{  fontSize:"20", color: "#55e7b5" }} > You</EventAvailableIcon>

                        &nbsp;&nbsp;
                        {dayjs(date).format('dddd DD / MM / YYYY')} at {dayjs(date).format('HH:mm')}

                    </div>

                    <br/>

                    <div style={{fontSize: 16, textAlign: "center"}}>
                        
                        <LocationOn style={{  fontSize:"20", color: "#55e7b5" }} > You</LocationOn>
                        
                        &nbsp;&nbsp;
                        {venue_name}
                    
                    </div>

                    <br/>

                    <div style={{fontSize: 20, textAlign: "center", margin: 0}}>
                        
                        Line-up
                    
                    </div>


                    { bubbles_all.length > 0 ?

                        <>

                        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>

                            {bubbles_min}

                        </div>


                        <div style={{color: "#55e7b5", fontSize: 10, textAlign: "center"}}>
                                
                            Minimum
                            
                        </div>

                        <hr style={{height: 1, backgroundColor: "#55e7b5", marginLeft: 10, marginRight: 10}}></hr>

                        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>

                            {bubbles_max}

                        </div>


                        <hr style={{height: 1, backgroundColor: "#ec00c9", marginLeft: 10, marginRight: 10}}></hr>

                        <div style={{color: "#ec00c9", fontSize: 10, textAlign: "center"}}>
                            
                            Maximum
                        
                        </div>

                    </>

                    :
                                        
                    <div className="text-center">
                        <br/>
                        <br/>
                        <br/>
                        <CircularProgress color="secondary" />
                        <br/>
                        <br/>
                        <br/>
                    </div>


                    }

                    <br/>
                    <br/>

					<DialogActions className="justify-between p-8">

						<div className="px-16" style={{marginLeft: "auto", marginRight: "auto"}}>

                            { playersConfirmed && playersConfirmed.some(player => player._id === me._id ) ?

                            <Button variant="contained" size="medium" color="secondary" >
                                Leave game
                            </Button>

                            :

                            <Button variant="contained" size="medium" color="secondary" onClick={handleJoin} >
                                Join game
                            </Button>

                            }
						</div>


					</DialogActions>

                    <br/>

				</div>
			
		</div>
	);
}

export default withRouter(GameDetails);
