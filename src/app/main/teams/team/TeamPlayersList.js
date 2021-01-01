
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
// NEW STUFF
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
import TeamPlayersListItem from './TeamPlayersListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamPlayers } from '../store/teamsSlice';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	root: {
		maxWidth: 400,
		minWidth: 400,
		//margin: 30
	  },
}));

function TeamPlayersList(data) {

	//console.log("TeamPlayersList")

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const classes = useStyles(data);
	const dispatch = useDispatch();
	const routeParams = useParams();

	const titles = data.currentTeam.titles

	const pending = data.currentTeam.members_pending

	//console.log("pending : ", pending)

	const me = useSelector(({ auth }) => auth.user);
	const players = useSelector(({ teams }) => teams.teams.teamPlayers);

	//console.log("Players in team : ", players)

	useDeepCompareEffect(() => {

		//console.log("useDeepCompareEffect...")

		dispatch(getTeamPlayers(routeParams));

	}, [players, dispatch, routeParams]);

	
	// Prevent error when currentUser data is not loaded yet
	if (_.isEmpty(players)) {   
		return null;
	}	


	let coaches = []

	if(titles.coach.length){

		coaches = titles.coach.map((player, index) => (

			<TeamPlayersListItem key={index} title={"Coach"} id={player} players={players} />

		))
	}

	let key_players = []

	if(titles.key_player.length){

		key_players = titles.key_player.map((player, index) => (

			<TeamPlayersListItem key={index} title={"Key player"} id={player} players={players} />

		))
	}

	let first_teamers = []

	if(titles.first_team.length){

		first_teamers = titles.first_team.map((player, index) => (

			<TeamPlayersListItem key={index} title={"First team"} id={player} players={players} />

		))
	}

	let rotationers = []

	if(titles.rotation.length){

		rotationers = titles.rotation.map((player, index) => (

			<TeamPlayersListItem key={index} title={"Rotation"} id={player} players={players} />

		))
	}

	let youngsters = []

	if(titles.youngster.length){

		youngsters = titles.youngster.map((player, index) => (

			<TeamPlayersListItem key={index} title={"Youngster"} id={player} players={players} />

		))
	}

	let applicants = []

	if(pending.length){

		applicants = pending.map((player, index) => (

			<TeamPlayersListItem key={index} title={"Pending"} id={player} players={players} />

		))
	}

			
	

	return (
		

		<Card className={classes.root}>
			
			<CardHeader 
				
				title="Players" 

			/>

			<CardContent>

			{titles.founder ? <TeamPlayersListItem title={"Founder"} id={titles.founder} players={players} /> : ""}

			{titles.legend ? <TeamPlayersListItem title={"Legend"} id={titles.legend} players={players} /> : ""}

			{titles.president ? <TeamPlayersListItem title={"President"} id={titles.president} players={players} /> : ""}

			{titles.manager ? <TeamPlayersListItem title={"Manager"} id={titles.manager} players={players} /> : ""}

			{coaches}
			{key_players}
			{first_teamers}
			{rotationers}

			{titles.wonderkid ? <TeamPlayersListItem title={"Wonderkid"} id={titles.wonderkid} players={players} /> : ""}

			{youngsters}
			{applicants}
				
			</CardContent>
				

		</Card>


	);
}

export default TeamPlayersList;