import i18next from 'i18next';
import Welcome_map from './Welcome_map';
import en from './i18n/en';
import fr from './i18n/fr';
import es from './i18n/es';

i18next.addResourceBundle('en', 'welcome_mapPage', en);
i18next.addResourceBundle('fr', 'welcome_mapPage', fr);
i18next.addResourceBundle('es', 'welcome_mapPage', es);

const Welcome_mapConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/welcome_map',
			component: Welcome_map
		}
	]
};

export default Welcome_mapConfig;

