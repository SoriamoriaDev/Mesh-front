import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import GamesMap from './google-map-react/gamesmap';
// NEW STUFF
import { selectGamesEntities, getGames } from './store/gamesSlice';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import reducer from './store';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function GamesPage(props) {


	//console.log("props in GamesPage", props)

	const classes = useStyles(props);

	// eslint-disable-next-line 
	const { t } = useTranslation('GamesPage');

	const dispatch = useDispatch();
	const games = useSelector(selectGamesEntities); 

	//console.log("Games received : ", games)

	useEffect(() => {

		//console.log("useEffect in GamesPage")

		dispatch(getGames());

	}, [dispatch]);

	if (_.isEmpty(games)) {   
		return null;
	}	

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}

			content={
				<div className="p-24">
					<GamesMap data={games} props={props}/>
				</div>
			}
		/>
	);
}

export default withReducer('games', reducer)(GamesPage);