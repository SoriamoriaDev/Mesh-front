import i18next from 'i18next';
import Games from './Games';
import en from './i18n/en';
import fr from './i18n/fr';
import es from './i18n/es';

i18next.addResourceBundle('en', 'GamesPage', en);
i18next.addResourceBundle('fr', 'GamesPage', fr);
i18next.addResourceBundle('es', 'GamesPage', es);

const GamesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/Games',
			component: Games
		}
	]
};

export default GamesConfig;

