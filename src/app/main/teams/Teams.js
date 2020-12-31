import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import TeamsHeader from './TeamsHeader';
import TeamsList from './TeamsList';
import reducer from './store';
import { getTeams } from './store/teamsSlice';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import CreateTeam from './CreateTeam';
import { Dialog } from '@material-ui/core';

function Teams(props) {

	console.log("Teams")

	//console.log("props in Teams : ", props)

	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);

	const pageLayout = useRef(null);
	const routeParams = useParams();


	const useStyles = makeStyles(theme => ({
		addButton: {
			position: 'absolute',
			right: 12,
			top: 50,
			zIndex: 99
		}
	}));

	const classes = useStyles(props);


	//console.log("routeParams", routeParams)

	useDeepCompareEffect(() => {
		//dispatch(getContacts(routeParams));
		//dispatch(getUserData());

		dispatch(getTeams(routeParams));


	}, [dispatch, routeParams]);

	function handleOpenDialog() {
		//setCurrentUser(teams[id])
		//console.log("Open dialog")
		setOpenDialog(true);
	}



	function handleCloseDialog() {
		setOpenDialog(false);
	}


	return (
		<>

			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<TeamsHeader pageLayout={pageLayout} />}
				content={<TeamsList props={props}/>}
				//leftSidebarContent={<ContactsSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>

			<FuseAnimate animation="transition.expandIn" delay={500}>
				<Fab
					color="secondary"
					aria-label="add"
					className={classes.addButton}
					onClick={() => handleOpenDialog()}
				>
					<Icon>add</Icon>
				</Fab>
			</FuseAnimate>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
			>

				<CreateTeam/> 

			</Dialog>

		</>
	);
}

export default withReducer('teams', reducer)(Teams);
