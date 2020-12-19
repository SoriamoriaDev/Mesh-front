//import React from 'react';
//import { Redirect } from 'react-router-dom';
import PlayersApp from './PlayersApp';

const PlayersAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		// {
		// 	path: '/apps/contacts/:id',
		// 	component: React.lazy(() => import('./PlayersApp'))
		// },
		// {
		// 	path: '/players',
		// 	component: () => <Redirect to="/players" />
		// }, 
		{
			path: '/players',
			component: PlayersApp
		}
	]
};

export default PlayersAppConfig;
