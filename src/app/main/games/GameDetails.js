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
import { clearGamePlayers, getGamePlayers } from './store/gamesSlice';
import dayjs from 'dayjs'
import { LocationOn } from '@material-ui/icons';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { CircularProgress, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
    }
}));


function GameDetails(props) {

    console.log("props.gameData : ", props.gameData)

	// eslint-disable-next-line
	const { t } = useTranslation('mailApp');
	const dispatch = useDispatch(); 
    const classes = useStyles(props);

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
    


    console.log("playersConfirmed : ", playersConfirmed)

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

        let list_players_confirmed = []

        list_players_confirmed = props.gameData.user_confirm.map(user => user.user_id)

        dispatch(getGamePlayers(list_players_confirmed));

        return () => {

            dispatch(clearGamePlayers());

        };
		
    }, [])

    useEffect(() => {

        let not_confirmed = max_players - props.gameData.user_confirm.length

        let copy_playersConfirmed

        copy_playersConfirmed = Object.assign([], playersConfirmed);

        for(let i = 0 ; i < not_confirmed ; i++){

            copy_playersConfirmed.push( {f_name: "Available spot", data : { photoURL : "/assets/images/avatars/avatar_dark.png" }} )

        }

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

                <img key={index+props.gameData.user_confirm.length} src={bubbles_all[index+props.gameData.user_confirm.length].data.photoURL} 
                //<img id={index} key={index} src="/assets/images/avatars/avatar_dark.png"
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
                    <br/>

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
