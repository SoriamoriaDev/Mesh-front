import i18next from 'i18next';
import Comingsoon from './Comingsoon';
import en from './i18n/en';
import fr from './i18n/fr';
import es from './i18n/es';

i18next.addResourceBundle('en', 'comingsoonPage', en);
i18next.addResourceBundle('fr', 'comingsoonPage', fr);
i18next.addResourceBundle('es', 'comingsoonPage', es);

const ComingsoonConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/comingsoon',
			component: Comingsoon
		}
	]
};

export default ComingsoonConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
