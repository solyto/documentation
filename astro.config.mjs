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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/solyto' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Self-Hosting', slug: 'getting-started/self-hosting' },
					],
				},
				{
					label: 'Dashboard',
					items: [
						{ label: 'Overview', slug: 'dashboard/overview' },
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
						{ label: 'Topics', slug: 'features/topics' },
					],
				},
				{
					label: 'Libraries',
					items: [
						{ label: 'Overview', slug: 'libraries/overview' },
						{ label: 'Music Library', slug: 'libraries/music' },
						{ label: 'Book Library', slug: 'libraries/books' },
						{ label: 'Movie Library', slug: 'libraries/movies' },
						{ label: 'Game Library', slug: 'libraries/games' },
						{ label: 'Recipe Library', slug: 'libraries/recipes' },
						{ label: 'Quote Library', slug: 'libraries/quotes' },
						{ label: 'Link Library', slug: 'libraries/links' },
						{ label: 'Plant Library', slug: 'libraries/plants' },
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
					label: 'Privacy & Security',
					slug: 'privacy',
				},
			],
		}),
	],
});
