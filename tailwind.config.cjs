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
					10: 'hsl(0, 0%, 99%)',
					50: 'hsl(0, 0%, 98%)',
					100: 'hsl(0, 0%, 95%)',
					700: 'hsl(200, 8%, 20%)',
					800: 'hsl(197, 8%, 17%)',
					900: 'hsl(200,8%,14%)',
					1000: 'hsla(200, 7%, 8%)'
				},
				cobalt: {
					50: 'hsl(224, 28%, 97%)',
					100: 'hsl(224, 28%, 94%)',
					600: 'hsl(224, 28%, 27%)',
					700: 'hsl(224, 28%, 17%)',
					800: 'hsl(225, 30%, 15%)',
					900: 'hsl(225, 30%, 11%)'
				}
			}
		}
	},
	plugins: []
};
