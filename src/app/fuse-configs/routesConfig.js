import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import GamesConfig from 'app/main/games/GamesConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ComingsoonConfig from 'app/main/comingsoon/ComingsoonConfig';

const routeConfigs = [ExampleConfig, GamesConfig, LoginConfig, LogoutConfig, RegisterConfig, ComingsoonConfig];

const routes = [

	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.

	...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']), //SIGNET
	{
		path: '/',
		component: () => <Redirect to="/login" />
	},
	{
		path: '/example',
		component: () => <Redirect to="/example" />
	},
	{
		path: '/games',
		component: () => <Redirect to="/games" />
	},
	{
		path: '/comingsoon',
		component: () => <Redirect to="/comingsoon" />
	}
];

export default routes;
