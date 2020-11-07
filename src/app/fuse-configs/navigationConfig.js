import i18next from 'i18next';
import es from './navigation-i18n/es';
import en from './navigation-i18n/en';
import fr from './navigation-i18n/fr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('fr', 'navigation', fr);
i18next.addResourceBundle('es', 'navigation', es);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'example-component',
				title: 'Example',
				translate: 'EXAMPLE',
				type: 'item',
				icon: 'whatshot',
				url: '/example'
			}
		]
	}
];

export default navigationConfig;
