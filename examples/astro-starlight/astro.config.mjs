// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						id: 'guru-widget-id',
						src: 'https://widget.gurubase.io/widget.latest.min.js',
						'data-widget-id': 'YOUR_WIDGET_ID', // Replace with your actual widget ID
						'data-margins': JSON.stringify({ bottom: "20px", right: "20px" }), // Optional
						'data-text': 'Ask AI', // Optional
						'data-name': 'YOUR_NAME', // Optional
						'data-icon-url': 'YOUR_ICON_URL', // Optional
						'data-light-mode': 'light', // Optional
						'data-bg-color': '#000000', // Optional
						defer: true,
					},
				},
			],
		}),
	],
});
