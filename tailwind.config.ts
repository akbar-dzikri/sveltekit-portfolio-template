import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { monochromeTheme } from './custom-skeleton-theme';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#262626',
				}
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': 'rgb(var(--color-surface-900))',
						'--tw-prose-headings': 'rgb(var(--color-surface-900))',
						'--tw-prose-lead': 'rgb(var(--color-surface-700))',
						'--tw-prose-links': 'rgb(var(--color-primary-500))',
						'--tw-prose-bold': 'rgb(var(--color-surface-900))',
						'--tw-prose-counters': 'rgb(var(--color-surface-700))',
						'--tw-prose-bullets': 'rgb(var(--color-surface-700))',
						'--tw-prose-hr': 'rgb(var(--color-surface-200))',
						'--tw-prose-quotes': 'rgb(var(--color-surface-900))',
						'--tw-prose-quote-borders': 'rgb(var(--color-surface-200))',
						'--tw-prose-captions': 'rgb(var(--color-surface-700))',
						'--tw-prose-code': 'rgb(var(--color-surface-900))',
						'--tw-prose-pre-code': 'rgb(var(--color-surface-900))',
						'--tw-prose-pre-bg': 'rgb(var(--color-surface-100))',
						'--tw-prose-th-borders': 'rgb(var(--color-surface-200))',
						'--tw-prose-td-borders': 'rgb(var(--color-surface-200))',
						
						// Dark mode
						'--tw-prose-invert-body': 'rgb(var(--color-surface-50))',
						'--tw-prose-invert-headings': 'rgb(var(--color-surface-50))',
						'--tw-prose-invert-lead': 'rgb(var(--color-surface-300))',
						'--tw-prose-invert-links': 'rgb(var(--color-primary-400))',
						'--tw-prose-invert-bold': 'rgb(var(--color-surface-50))',
						'--tw-prose-invert-counters': 'rgb(var(--color-surface-400))',
						'--tw-prose-invert-bullets': 'rgb(var(--color-surface-400))',
						'--tw-prose-invert-hr': 'rgb(var(--color-surface-700))',
						'--tw-prose-invert-quotes': 'rgb(var(--color-surface-100))',
						'--tw-prose-invert-quote-borders': 'rgb(var(--color-surface-700))',
						'--tw-prose-invert-captions': 'rgb(var(--color-surface-400))',
						'--tw-prose-invert-code': 'rgb(var(--color-surface-50))',
						'--tw-prose-invert-pre-code': 'rgb(var(--color-surface-50))',
						'--tw-prose-invert-pre-bg': 'rgb(var(--color-surface-900))',
						'--tw-prose-invert-th-borders': 'rgb(var(--color-surface-600))',
						'--tw-prose-invert-td-borders': 'rgb(var(--color-surface-600))',

						// Additional code block styling
						pre: {
							'background-color': 'rgb(var(--color-surface-100))',
							'color': 'rgb(var(--color-surface-900))',
							'border': '1px solid rgb(var(--color-surface-300))',
							'border-radius': '0.5rem',
							'padding': '1rem',
							'margin': '1rem 0',
							'.dark &': {
								'background-color': 'rgb(var(--color-surface-900))',
								'color': 'rgb(var(--color-surface-50))',
								'border-color': 'rgb(var(--color-surface-700))'
							}
						},
						'pre code': {
							'background-color': 'transparent',
							'border': 'none',
							'padding': '0',
							'color': 'inherit',
							'font-size': '0.875em'
						},
						':not(pre) > code': {
							'background-color': 'rgb(var(--color-surface-200))',
							'color': 'rgb(var(--color-surface-900))',
							'padding': '0.2em 0.4em',
							'border-radius': '0.25rem',
							'.dark &': {
								'background-color': 'rgb(var(--color-surface-800))',
								'color': 'rgb(var(--color-surface-50))'
							}
						}
					}
				},
				invert: {
					css: {
						'--tw-prose-body': 'rgb(200 200 200)',
						'--tw-prose-headings': 'rgb(255 255 255)',
						'--tw-prose-links': 'rgb(200 200 200)',
						'--tw-prose-bold': 'rgb(255 255 255)',
						'--tw-prose-counters': 'rgb(200 200 200)',
						'--tw-prose-bullets': 'rgb(200 200 200)',
						'--tw-prose-quotes': 'rgb(255 255 255)',
						'--tw-prose-pre-bg': 'rgb(35 35 35)',
						'--tw-prose-selection': 'rgb(40 40 40)',
					}
				}
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					monochromeTheme
				]
			}
		}),
		forms,
		typography,
		containerQueries
	]
} satisfies Config;

export default config;
