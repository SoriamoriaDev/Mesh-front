import i18next from 'i18next';
import Myprofile from './Myprofile';
import en from './i18n/en';
import fr from './i18n/fr';
import es from './i18n/es';

i18next.addResourceBundle('en', 'MyprofilePage', en);
i18next.addResourceBundle('fr', 'MyprofilePage', fr);
i18next.addResourceBundle('es', 'MyprofilePage', es);

const MyprofileConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/Myprofile',
			component: Myprofile
		}
	]
};

export default MyprofileConfig;

