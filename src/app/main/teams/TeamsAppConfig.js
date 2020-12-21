//import React from 'react';
//import { Redirect } from 'react-router-dom';
import Teams from './Teams';

const TeamsAppConfig = {
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
			path: '/teams',
			component: Teams
		}
	]
};

export default TeamsAppConfig;
