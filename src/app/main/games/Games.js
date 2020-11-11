import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GamesMap from './google-map-react/gamesmap';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function GamesPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('GamesPage');

	console.log("props in Welcome Map", props)

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
					<GamesMap/>
				</div>
			}
		/>
	);
}

export default GamesPage;
