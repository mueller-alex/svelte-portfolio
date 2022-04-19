module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				white: '#fff',
				mueller: {
					50: 'hsl(0, 0%, 98%)',
					100: 'hsl(0, 0%, 95%)',
					700: 'hsl(200, 8%, 20%)',
					800: 'hsl(197, 8%, 17%)',
					900: 'hsl(200,8%,14%)'
				}
			}
		}
	},
	plugins: []
};
