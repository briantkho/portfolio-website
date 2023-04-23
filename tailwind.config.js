/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			dark: {
				background: '#121212',
				ow: '#FFFFE7'
			},
			light: {
				background: '#FFFFFF',
				black: '#121212'
			}
		}
	},
	plugins: []
};
