
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import _ from '@lodash';
import Icon from '@material-ui/core/Icon';
import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Snackbar } from '@material-ui/core';
import { handleJoinTeam } from '../store/teamsSlice';
import { useParams } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
	avatarYes: {
	  backgroundColor: "primary",
	  color: theme.palette.secondary.main,
	},
	avatarNo: {
	  backgroundColor: "primary",
	  color: theme.status.danger,
	},
	toaster: {
		position: 'absolute',
		right: 12,
		bottom: 90,
		zIndex: 99
	}
}));

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function MembersPromotions(data) {

	
	//console.log("MembersPromotions")

	// eslint-disable-next-line 
	const { t } = useTranslation('MyprofilePage');
	const classes = useStyles();
	const dispatch = useDispatch()
	const routeParams = useParams();

	const [openDialog, setOpenDialog] = useState(false);
	const [openToaster, setOpenToaster] = useState(false);

	const currentPlayer =  data.currentPlayer;
	const currentTeam = useSelector(({ teams }) => teams.teams.oneTeam);
	const me = useSelector(({ auth }) => auth.user);

	const [isUserPartOfTeam, setIsUserPartOfTeam] = useState(false);
	const [isUserTeamAdmin, setIsUserTeamAdmin] = useState(false);
	
	//console.log("currentPlayer : ", currentPlayer)
	//console.log("me in MembersPromotions : ", me)
	//console.log("currentTeam in MembersPromotions : ", currentTeam)


	let checkIfPartOfTeam = -1

	if(currentTeam) checkIfPartOfTeam = currentTeam.members_confirmed.indexOf(me._id)

	//console.log("checkIfPartOfTeam : ", checkIfPartOfTeam)

	if(checkIfPartOfTeam !== -1 && !isUserPartOfTeam){

		//console.log("set IsUserPartOfTeam to true")
		
		setIsUserPartOfTeam(true)

	}

	if(checkIfPartOfTeam == -1 && isUserPartOfTeam){

		//console.log("set IsUserPartOfTeam to false")
		
		setIsUserPartOfTeam(false)

	}

	const handleOpenDialog = () => {

		setOpenDialog(true)
		

  	};

	const handleCloseDialog = () => {

		setOpenDialog(false)

	};
  
	const handleListItemClick = (value) => {

		// console.time("test")

		console.log(value)
		setOpenDialog(false)
		setOpenToaster(true);

		let data = {teamID: routeParams.teamId, userID: currentPlayer._id, decision: value}

		setTimeout( () => dispatch(handleJoinTeam(data)) , 3000);
		
		
		// console.timeEnd("test")
		
		
	};

	function handleCloseToaster(){

		//console.log("Close toaster function")
		setOpenToaster(false);
		
	}
	
	// Prevent error when currentUser data is not loaded yet
	// if (_.isEmpty(currentUser)) {   
	// 	return null;
	// }	

	//console.log("isUserPartOfTeam ? :", isUserPartOfTeam)

	return (

		
		<>
			{isUserPartOfTeam && data.status === "Pending"? 

			<IconButton size="small" aria-label="edit" color="secondary" onClick={handleOpenDialog}>
				<Icon>edit</Icon>
			</IconButton>

			:

			<IconButton size="small" disabled aria-label="edit" color="secondary" onClick={handleOpenDialog}>
				<Icon>edit</Icon>
			</IconButton>

			}

			<Dialog onClose={handleCloseDialog} aria-labelledby="simple-dialog-title" open={openDialog}>

				<DialogTitle id="simple-dialog-title">Promotion options</DialogTitle>

				<List>

					{data.status === "Pending"? 

					<div>

						<ListItem autoFocus button onClick={() => handleListItemClick('accept')}>

							<ListItemAvatar>
								<Avatar className={classes.avatarYes}>
									<Icon>check</Icon>
								</Avatar>
							</ListItemAvatar>

							<ListItemText primary="Accept player to join the team" />

						</ListItem>

						<ListItem autoFocus button onClick={() => handleListItemClick('reject')}>

							<ListItemAvatar>
								<Avatar className={classes.avatarNo}>
									<Icon>clear</Icon>
								</Avatar>
							</ListItemAvatar>

							<ListItemText primary="Reject player" />

						</ListItem>

					</div>

					: "" }


					{/* {emails.map((email) => (

						<ListItem button onClick={() => handleListItemClick(email)} key={email}>
							
							<ListItemAvatar>
								<Avatar className={classes.avatar}>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>

							<ListItemText primary={email} />

						</ListItem>
					))}

					<ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>

						<ListItemAvatar>
							<Avatar>
								<AddIcon />
							</Avatar>
						</ListItemAvatar>

						<ListItemText primary="Add account" />

					</ListItem> */}

				</List>

			</Dialog>

			<Snackbar open={openToaster} autoHideDuration={4000} onClose={handleCloseToaster} className={classes.toaster}
				//anchorOrigin={{ vertical:"center", horizontal:"center" }}
			>
				<Alert severity="success" style={{backgroundColor:"#55e7b5"}} >
				The player request has been handled !
				</Alert>
			</Snackbar>

		</>
	);
}

export default MembersPromotions;