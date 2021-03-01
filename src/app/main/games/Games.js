import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import GamesMap from './google-map-react/gamesmap';
// NEW STUFF
import { selectGamesEntities, getGames } from './store/gamesSlice';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import React, { useEffect, useRef, useState } from 'react';
import reducer from './store';
import _ from '@lodash';
import GamesHeader from './GamesHeader';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    layoutRoot: {},
    addButton: {
        position: 'absolute',
        right: 12,
        top: 50,
        zIndex: 99,
        //width: 90,
        //height: 90,
    }
}));


function GamesPage(props) {


    const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);

	// eslint-disable-next-line 
	const { t } = useTranslation('GamesPage');

    const games = useSelector(selectGamesEntities); 
    const [openDialog, setOpenDialog] = useState(0);

	//console.log("Games received : ", games)

	useEffect(() => {

		//console.log("useEffect in GamesPage")

		dispatch(getGames());

    }, [dispatch]);
    
    function handleOpenDialog() {
		//setCurrentUser(teams[id])
		console.log("Open dialog...")
		setOpenDialog(openDialog + 1);
	}

	function handleCloseDialog() {
		setOpenDialog(false);
	}

	if (_.isEmpty(games)) {   
		return null;
    }	
    
    console.log("openDialog : ", openDialog)

	return (

        <>
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}

                header={<GamesHeader pageLayout={pageLayout}/>}

                content={
                    <div className="p-24">
                        <GamesMap data={games} createGame={openDialog}/>
                    </div>
                }
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

            {/* <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
            >

                <CreateTeam props={props} /> 

            </Dialog> */}

            </>

	);
}

export default withReducer('games', reducer)(GamesPage);