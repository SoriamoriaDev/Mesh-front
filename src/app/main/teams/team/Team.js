import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { askJoinTeam, getTeam } from '../store/teamsSlice';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, Snackbar } from '@material-ui/core';
import TeamHeader from './TeamHeader';
import TeamPlayersList from './TeamPlayersList';
import TeamStats from './TeamStats';
import TeamChat from './TeamChat';
import _ from '@lodash';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
	addButton: {
		position: 'absolute',
		right: 12,
		top: 40,
		zIndex: 99
	},
	joinButton: {
		position: 'absolute',
		right: 12,
		top: 53,
		zIndex: 99
	},
	toaster: {
		position: 'absolute',
		right: 12,
		bottom: 90,
		zIndex: 99
	}
}));

function Team(props) {

	//console.log("Team")

	const classes = useStyles(props);
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();

	//console.log("routeParams", routeParams)

	const [openToaster, setOpenToaster] = useState(false);

	const [isUserPartOfTeam, setIsUserPartOfTeam] = useState(false);
	const [isUserTeamAdmin, setIsUserTeamAdmin] = useState(false);


	const currentTeam = useSelector(({ teams }) => teams.teams.oneTeam);
	const me = useSelector(({ auth }) => auth.user);

	//console.log("currentTeam : ", currentTeam)

	//if(currentTeam) console.log("currentTeam : ", currentTeam)

	//if(me) console.log("me._id : ", me._id)

	let checkIfPartOfTeam

	if(currentTeam) checkIfPartOfTeam = currentTeam.members_confirmed.find(element => element == me._id)

	if(checkIfPartOfTeam && !isUserPartOfTeam){

		//console.log("checkIfPartOfTeam : ", checkIfPartOfTeam)
		setIsUserPartOfTeam(true)

	}

	useDeepCompareEffect(() => {

		dispatch(getTeam(routeParams));

	}, [dispatch, routeParams]);


	function handleJoinRequest() {

		console.log("Asked to join")
		setOpenToaster(true);
		let data = {teamID: routeParams.teamId, userID: me._id}
		dispatch(askJoinTeam(data));

	}

	function handleCloseToaster(){
		setOpenToaster(false);
	}

	function handleOpenDialog(){
		console.log("Edit the team...")
	}


	// Prevent error when currentUser data is not loaded yet
	if (_.isEmpty(currentTeam)) {   
		return null;
	}

	//console.log("isUserPartOfTeam ? :", isUserPartOfTeam)

	return (
		<>

			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-12 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<TeamHeader data={currentTeam} pageLayout={pageLayout} />}

				content={

					<div>

						<div  style={{padding:"12px", display : 'inline-block', verticalAlign:"top"}}>
							<TeamPlayersList  currentTeam={currentTeam}/>
						</div>

						<div  style={{padding:"12px" , display : 'inline-block', verticalAlign:"top"}}>
							<TeamStats />
						</div>
						
						<div  style={{padding:"12px" , display : 'inline-block', verticalAlign:"top"}}>
							<TeamChat />
						</div>
					
					</div>
				
				}

				sidebarInner
				ref={pageLayout}
				innerScroll
			/>

			{isUserTeamAdmin?

				<FuseAnimate animation="transition.expandIn" delay={1000}>
					<Fab
						color="secondary"
						aria-label="add"
						className={classes.addButton}
						onClick={() => handleOpenDialog()}
					>
						<Icon>edit</Icon>
					</Fab>
				</FuseAnimate>

			: "" }

			{isUserPartOfTeam ? "" :

				<FuseAnimate animation="transition.expandIn" delay={1000}>
					
					<Button variant="outlined" size="small" color="secondary" className={classes.joinButton} onClick={() => handleJoinRequest()}>
						Ask to join team
					</Button>

				</FuseAnimate>

				
			}

			{/* <Dialog
				open={openDialog}
				onClose={handleCloseDialog}
			>

				<CreateTeam/> 

			</Dialog> */}

			<Snackbar open={openToaster} autoHideDuration={4000} onClose={handleCloseToaster} className={classes.toaster}
				//anchorOrigin={{ vertical:"center", horizontal:"center" }}
			>
				<Alert severity="success" style={{backgroundColor:"#55e7b5"}} >
				Your request has been recorded !
				</Alert>
			</Snackbar>

		</>
	);
}

export default withReducer('teams', reducer)(Team);
