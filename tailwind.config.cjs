module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'Inter var, Inter, sans-serif',
				{ fontFeatureSettings: "'ss02', 'ss01', 'cv06', 'cv11', 'cpsp', 'case'" }
			]
		},
		extend: {
			backdropBlur: {
				xs: '2.5px'
			},
			maxWidth: {
				'screen-3xl': '1920px'
			},
			fontFamily: {
				space: [
					'Space Grotesk, sans-serif',
					{
						fontFeatureSettings: "'case', 'ss01'"
					}
				]
			},
			backgroundImage: {
				glass: "url('/glass.svg')",
				spiral: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50' height='50' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsl(224, 28%, 10%)'/><path d='M0 3a22 22 0 1 0 22 22c0-1.15-.17-2.24-.34-3.33-.36-.06-.74-.05-1.1-.12-.32-.07-.62-.21-.94-.29.23 1.21.38 2.46.38 3.74A20 20 0 1 1 0 5.01c1.28 0 2.53.15 3.74.37-.08-.32-.23-.62-.3-.95-.06-.35-.04-.74-.1-1.1C2.24 3.17 1.15 3 0 3Zm50 0a22 22 0 0 0-22 22c0 1.15.17 2.24.34 3.33.36.06.74.05 1.1.12.32.07.62.21.94.29A20.02 20.02 0 0 1 30 25 20 20 0 0 1 50 5.01 20 20 0 1 1 50 45a20.1 20.1 0 0 1-3.74-.38c.08.33.23.62.3.95.06.35.04.73.1 1.1 1.1.16 2.2.33 3.34.33a22 22 0 1 0 0-44ZM0 7a18 18 0 1 0 18 18c0-1.54-.25-3.01-.61-4.43-.31-.12-.65-.17-.95-.3-.52-.22-.98-.54-1.48-.8A15.87 15.87 0 0 1 16 25 16 16 0 1 1 0 9c1.95 0 3.8.4 5.53 1.04-.26-.5-.58-.95-.8-1.48-.13-.3-.18-.64-.3-.94A17.86 17.86 0 0 0 0 7Zm50 0a18 18 0 0 0-18 18c0 1.54.25 3.01.61 4.43.32.12.66.17.96.3.52.22.97.54 1.47.8A15.87 15.87 0 0 1 34 25a16 16 0 1 1 16 16c-1.95 0-3.8-.4-5.53-1.04.26.5.58.95.8 1.48.13.3.18.64.3.95 1.41.36 2.88.61 4.43.61a18 18 0 0 0 0-36ZM0 11a14 14 0 1 0 14 14 13.9 13.9 0 0 0-2.23-7.52c-.8-.61-1.61-1.21-2.32-1.93-.72-.7-1.32-1.52-1.93-2.33A13.9 13.9 0 0 0 0 11Zm50 0a14 14 0 0 0-14 14 13.9 13.9 0 0 0 2.23 7.52c.8.61 1.62 1.21 2.33 1.92s1.31 1.53 1.92 2.33A13.9 13.9 0 0 0 50 39a14 14 0 0 0 0-28ZM0 13.03A11.94 11.94 0 0 1 12 25a12 12 0 0 1-24 0A12 12 0 0 1 0 13.03Zm50 0A11.94 11.94 0 0 1 62 25a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM0 15a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm50 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM0 17a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm50 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16zM0 19a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm50 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM0 21a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm50 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(225, 30%, 8%)'/><path d='M25-22a22 22 0 1 0 0 44c1.15 0 2.24-.17 3.33-.34.06-.36.05-.74.12-1.1.07-.32.21-.62.29-.94-1.21.23-2.46.38-3.74.38A20 20 0 1 1 45 0c0 1.28-.15 2.52-.38 3.74.33-.08.62-.23.95-.3.35-.06.73-.04 1.1-.1.16-1.1.33-2.19.33-3.34a22 22 0 0 0-22-22Zm0 4a18 18 0 1 0 0 36c1.54 0 3.01-.25 4.43-.61.12-.31.17-.65.3-.95.22-.52.54-.98.8-1.48A15.87 15.87 0 0 1 25 16 16 16 0 1 1 41 0c0 1.95-.4 3.8-1.04 5.53.5-.26.95-.58 1.48-.8.3-.13.64-.18.95-.3.36-1.41.61-2.88.61-4.43a18 18 0 0 0-18-18Zm0 4a14 14 0 0 0 0 28 13.9 13.9 0 0 0 7.52-2.23c.61-.8 1.21-1.61 1.92-2.32.71-.72 1.53-1.32 2.33-1.93A13.9 13.9 0 0 0 39 0a14 14 0 0 0-14-14Zm0 2.03A11.94 11.94 0 0 1 37 0a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 32c-1.15 0-2.24.17-3.33.34-.06.36-.05.74-.12 1.1-.07.33-.21.63-.3.95 1.22-.23 2.46-.38 3.75-.38A20 20 0 1 1 5 50c0-1.28.15-2.52.38-3.74-.33.08-.62.23-.95.3-.35.06-.73.04-1.1.1C3.17 47.77 3 48.85 3 50a22 22 0 1 0 22-22Zm0 4c-1.54 0-3.01.26-4.43.63-.12.3-.17.63-.3.93-.22.52-.54.98-.8 1.48A15.87 15.87 0 0 1 25 34 16 16 0 1 1 9 50c0-1.95.4-3.8 1.04-5.53-.5.26-.95.58-1.48.8-.3.13-.64.18-.95.3A17.84 17.84 0 0 0 7 50a18 18 0 1 0 18-18Zm0 4a13.9 13.9 0 0 0-7.52 2.23c-.61.8-1.21 1.62-1.93 2.33-.7.71-1.52 1.31-2.33 1.92A13.9 13.9 0 0 0 11 50a14 14 0 1 0 14-14Zm0 2.03A11.94 11.94 0 0 1 37 50a12 12 0 0 1-24 0 12 12 0 0 1 12-11.97ZM25 40a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'  stroke-width='2' stroke='none' fill='hsl(225, 30%, 8%)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`
			},
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
					500: 'hsl(225, 28%, 24%)',
					600: 'hsl(225, 28%, 20%)',
					700: 'hsl(225, 28%, 17%)',
					800: 'hsl(225, 30%, 15%)',
					900: 'hsl(225, 30%, 11%)'
				}
			}
		}
	},
	plugins: []
};
