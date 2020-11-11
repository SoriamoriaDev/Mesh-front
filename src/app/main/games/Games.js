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
	
	const classes = useStyles(props);

	// eslint-disable-next-line 
	const { t } = useTranslation('GamesPage');

	console.log("props in Welcome Map", props)

	const dispatch = useDispatch();
	const games = useSelector(selectGamesEntities); 

	useEffect(() => {

		console.log("useEffect")

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

			// header={
			// 	<div className="p-24">
			// 		<h4>{t('TITLE')}</h4>
			// 	</div>
			// }
			
			content={
				<div className="p-24">
					<GamesMap data={games} />
				</div>
			}
		/>
	);
}

export default withReducer('gamesPage', reducer)(GamesPage);

//export default GamesPage;
//export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);