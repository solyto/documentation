// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.solyto.app',
	integrations: [
		starlight({
			title: 'solyto docs',
			description: 'Documentation for solyto — the free, private, all-in-one personal management app.',
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/solyto' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/solyto' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is solyto', slug: 'getting-started/what' },
						{ label: 'Why solyto', slug: 'getting-started/why' },
						{ label: 'How to use solyto', slug: 'getting-started/how' },
						{ label: 'First Steps', slug: 'getting-started/first-steps' },
						{ label: 'Community', slug: 'getting-started/community' },
					],
				},
				{
					label: 'Dashboard',
					items: [
						{ label: 'Overview', slug: 'dashboard/overview' },
						{ label: 'Quick Add', slug: 'dashboard/quick-add' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Todos', slug: 'features/todos' },
						{ label: 'Calendar', slug: 'features/calendar' },
						{ label: 'Contacts', slug: 'features/contacts' },
						{ label: 'Notes', slug: 'features/notes' },
						{ label: 'Feeds', slug: 'features/feeds' },
						{ label: 'Check In', slug: 'features/check-in' },
						{ label: 'Time Tracking', slug: 'features/time-tracking' },
						{ label: 'Finances', slug: 'features/finances' },
						{ label: 'Clipboard', slug: 'features/clipboard' },
						{
							label: 'Libraries',
							items: [
								{ label: 'Overview', slug: 'features/libraries/overview' },
								{ label: 'Music Library', slug: 'features/libraries/music' },
								{ label: 'Book Library', slug: 'features/libraries/books' },
								{ label: 'Movie Library', slug: 'features/libraries/movies' },
								{ label: 'Game Library', slug: 'features/libraries/games' },
								{ label: 'Recipe Library', slug: 'features/libraries/recipes' },
								{ label: 'Quote Library', slug: 'features/libraries/quotes' },
								{ label: 'Link Library', slug: 'features/libraries/links' },
								{ label: 'Plant Library', slug: 'features/libraries/plants' },
							],
						},
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Telegram Bot', slug: 'integrations/telegram' },
						{ label: 'DAV Sync (CalDAV / CardDAV)', slug: 'integrations/dav-sync' },
						{ label: 'Importing Data', slug: 'integrations/importing' },
						{ label: 'Exporting Data', slug: 'integrations/exporting' },
					],
				},
				{
					label: 'Customization',
					items: [
						{ label: 'Themes', slug: 'customization/themes' },
						{ label: 'Notifications', slug: 'customization/notifications' },
						{ label: 'Keyboard Shortcuts', slug: 'customization/keyboard-shortcuts' },
						{ label: 'Languages', slug: 'customization/languages' },
					],
				},
				{
					label: 'Account',
					items: [
						{ label: 'Profile & Settings', slug: 'account/profile' },
						{ label: 'Friends', slug: 'account/friends' },
						{ label: 'AI Assistants', slug: 'account/ai-assistants' },
						{ label: 'Dev Requests', slug: 'account/dev-requests' },
						{ label: 'Install as App (PWA)', slug: 'account/pwa' },
					],
				},
				{
					label: 'Self-Hosting',
					items: [
						{ label: 'Overview', slug: 'self-hosting/overview' },
						{ label: 'Installation', slug: 'self-hosting/installation' },
						{ label: 'Configuration', slug: 'self-hosting/configuration' },
						{ label: 'Docker Secrets', slug: 'self-hosting/secrets' },
						{ label: 'Upgrading', slug: 'self-hosting/upgrading' },
						{ label: 'Troubleshooting', slug: 'self-hosting/troubleshooting' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Authentication', slug: 'api-reference/authentication' },
						{ label: 'Users & Settings', slug: 'api-reference/users' },
						{ label: 'Todos', slug: 'api-reference/todos' },
						{ label: 'Notes', slug: 'api-reference/notes' },
						{ label: 'Calendars', slug: 'api-reference/calendars' },
						{ label: 'Contacts', slug: 'api-reference/contacts' },
						{ label: 'Libraries', slug: 'api-reference/libraries' },
						{ label: 'Feeds', slug: 'api-reference/feeds' },
						{ label: 'Finances', slug: 'api-reference/finances' },
						{ label: 'Time Tracking', slug: 'api-reference/time-tracking' },
						{ label: 'Check In', slug: 'api-reference/check-in' },
						{ label: 'Clipboard', slug: 'api-reference/clipboard' },
						{ label: 'Notifications', slug: 'api-reference/notifications' },
						{ label: 'Data Export', slug: 'api-reference/export' },
						{ label: 'Friends', slug: 'api-reference/friends' },
						{ label: 'Telegram', slug: 'api-reference/telegram' },
						{ label: 'Quick Add', slug: 'api-reference/quick-add' },
					],
				},
				{
					label: 'Privacy & Security',
					slug: 'privacy',
				},
			],
		}),
	],
});
