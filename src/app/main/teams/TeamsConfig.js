import React from 'react';
//import { Redirect } from 'react-router-dom';
import Teams from './Teams';


const TeamsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		 
		{
			path: '/teams/team/:teamId', // Lazy have to be before non Lazy
			component: React.lazy(() => import('./team/Team'))
		},
		{
			path: '/teams',
			component: Teams
		}
		
		
	]
};

export default TeamsConfig;
