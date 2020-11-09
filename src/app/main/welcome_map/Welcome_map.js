import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SimpleExample from './google-map-react/examples/simple';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function Welcome_mapPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('welcome_mapPage');

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
					<SimpleExample/>
				</div>
			}
		/>
	);
}

export default Welcome_mapPage;
