import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import Welcome_mapConfig from 'app/main/welcome_map/Welcome_mapConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';

const routeConfigs = [ExampleConfig, Welcome_mapConfig, LoginConfig, LogoutConfig, RegisterConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	},
	{
		path: '/example',
		component: () => <Redirect to="/example" />
	}
];

export default routes;
