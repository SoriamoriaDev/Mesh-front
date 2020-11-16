import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import clsx from 'clsx';
import React from 'react';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import reducer from 'app/fuse-layouts/shared-components/quickPanel/store';
import { sendGPSLocation } from './store/GPSlocationSlice';


const useStyles = makeStyles(theme => ({
	root: {}
}));

function ToolbarLayout1(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(selectToolbarTheme);

	const classes = useStyles(props);

	const dispatch = useDispatch();



	// ************** GET YOUR CURRENT GPS POSITION ********************  // SIGNET
	var crd;

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {

		//console.log("pos", pos)

		crd = pos.coords;

		const result = {lat : crd.latitude, lng : crd.longitude}
		
		dispatch(sendGPSLocation(result)); // <--- IMPORTANT

	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);

	// *****************************************************************


	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.root, 'flex relative z-10')}
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.paper }}   // SIGNET
				elevation={2}
			>
				<Toolbar className="p-0 min-h-48 md:min-h-64">
					{config.navbar.display && config.navbar.position === 'left' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
						</Hidden>
					)}

					<div className="flex items-center px-16 ml-auto" >

						<LanguageSwitcher />

						<UserMenu />

					</div>

					{config.navbar.display && config.navbar.position === 'right' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton />
						</Hidden>
					)}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout1);
//export default withReducer('GPSlocation', reducer)(ToolbarLayout1);
