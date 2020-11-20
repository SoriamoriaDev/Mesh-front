import i18next from 'i18next';
import es from './navigation-i18n/es';
import en from './navigation-i18n/en';
import fr from './navigation-i18n/fr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('fr', 'navigation', fr);
i18next.addResourceBundle('es', 'navigation', es);

const navigationConfig = [  // SIGNET
	{
		id: 'admin',
		title: 'Applications',
		translate: 'ADMIN',
		type: 'group',
		icon: 'apps',
		children: [
			
			{
				id: 'games',
				title: 'Welcome Map',
				translate: 'Games',
				type: 'item',
				icon: 'event',
				url: '/games'
			},
			{
				id: 'teams',
				title: 'Example',
				translate: 'Teams',
				type: 'item',
				icon: 'security',
				url: '/comingsoon'
			},
			{
				id: 'players',
				title: 'Example',
				translate: 'Players',
				type: 'item',
				icon: 'people',
				url: '/comingsoon'
			},
			{
				id: 'your-profile',
				title: 'Example',
				translate: 'My profile',
				type: 'item',
				icon: 'perm_identity',
				url: '/myprofile'
			},
			{
				id: 'transfer',
				title: 'Example',
				translate: 'Transfer market',
				type: 'item',
				icon: 'compare_arrows',
				url: '/comingsoon'
			},
			{
				id: 'venues',
				title: 'Example',
				translate: 'Venues',
				type: 'item',
				icon: 'place',
				url: '/comingsoon'
			},
			{
				id: 'chat',
				title: 'Example',
				translate: 'Chat',
				type: 'item',
				icon: 'chat',
				url: '/comingsoon'
			},
			// {
			// 	id: 'example-component',
			// 	title: 'Example',
			// 	translate: 'EXAMPLE',
			// 	type: 'item',
			// 	icon: 'whatshot',
			// 	url: '/example'
			// }
		]
	}
];

export default navigationConfig;
