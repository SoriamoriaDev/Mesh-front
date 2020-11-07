import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMapReactDoc from './google-map-react/GoogleMapReactDoc';

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
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Map showing here in the future</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<GoogleMapReactDoc />
				</div>
			}
		/>
	);
}

export default Welcome_mapPage;
