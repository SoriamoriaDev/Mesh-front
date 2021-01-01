
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
import { useSelector } from 'react-redux';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import LocationOn from '@material-ui/icons/LocationOn';
//import CustomizedRatings from './Rating';
import dayjs from 'dayjs'
import _ from '@lodash';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import MembersPromotions from './MembersPromotions';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	root: {
		maxWidth: 400,
		minWidth: 400,
		//margin: 30
	  },
}));

function TeamPlayersListItem(data) {

	//console.log("TeamPlayersListItem")

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const classes = useStyles(data);

	const id = data.id
	const players = data.players

	//console.log("id in TeamPlayersListItem : ", id)
	//console.log("players in TeamPlayersListItem : ", players)

	let currentPlayer = players.find(element => element._id == id)

	//console.log("currentPlayer : ", currentPlayer)

	// Prevent error when currentUser data is not loaded yet
	if (_.isEmpty(currentPlayer)) {   
		return null;
	}	


	return (
		<>
				
				<hr/>
				<br/>

				<div>

					{data.title == "Pending" ? 

						<div style=
								{{
										verticalAlign:"-10%",
										marginRight:"10px",
										display:"inline-block",
										backgroundColor:"orange",
										borderRadius: "50%",
										width:10,
										height:10,
										bottom:0
								}}>
						</div>

					: 

						<div style=
								{{
										verticalAlign:"-10%",
										marginRight:"10px",
										display:"inline-block",
										backgroundColor:"#55e7b5",
										borderRadius: "50%",
										width:10,
										height:10,
										bottom:0
								}}>
						</div>
					}


					<img src={currentPlayer  && currentPlayer.data.photoURL ? currentPlayer.data.photoURL : "/assets/images/avatars/max.jpg"} 
						alt="avatar" 
						style={{
						width: 30,
						height: 30,
						borderRadius: 150 / 2,
						borderColor: "white",
						borderWidth: 2,
						objectFit: "cover",
						display: "inline-block",
						}}
					/>

					<p style={{paddingLeft:"10px", display : 'inline-block'}}><b>{currentPlayer.f_name} {currentPlayer.l_name}</b></p> 


					<div className="float-right">

						<p style={{fontSize:"12px", paddingRight:"20px", display : 'inline-block'}}>{data.title}</p>

						<MembersPromotions currentPlayer={currentPlayer} status={data.title} />

					</div>
					

				</div>
				<br/>

		</>


	);
}

export default TeamPlayersListItem;