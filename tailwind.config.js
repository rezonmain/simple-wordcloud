/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			dropShadow: {
				noBlur: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
		},
		fontFamily: {
			serif: ['Maitree', 'serif'],
		},
	},
	plugins: [],
};
