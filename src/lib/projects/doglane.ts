import type { Project } from 'src/lib/types/project.type';

const dogLane: Project = {
	id: 'doglane',
	info: {
		name: 'Dog Lane Café',
		subtitle: 'Branding',
		role: 'Branding Designer',
		timeline: 'Feb 2020',
		tools: 'Adobe Illustrator, Figma',
		overview: [
			'Dog Lane Café is a small, locally-owned restaurant located in the town of Storrs, Connecticut. They are known for their European and American-style dishes, which are available for breakfast, lunch, and dinner. As part of my junior year Design Lab course, we were tasked with rebranding Dog Lane Café and designing and prototyping an app for the business. The goal of the rebranding project was to give the restaurant a fresh, modern look that would attract new customers and establish the restaurant as a go-to destination. The app was designed to enhance the customer experience and make it easier for people to find out about the restaurant, view menus and specials, make reservations, and place orders. Overall, the rebranding and app development project was an exciting opportunity for the students to put their design skills to the test.'
		]
	},
	meta: {
		backgroundColor: 'hsla(14,97%,65%, 30%)',
		vantaColor: 'hsl(14,67%,45%)'
	},
	page: [
		{
			title: 'Branding',
			nodes: [
				{
					key: 'text-image',
					content: [
						{
							paragraphs: [
								"As a user experience designer, I wanted to ensure that the branding for Dog Lane felt up-to-date and in line with its college town surroundings. When I first looked at their branding, I felt that it was lacking in a number of areas. The font they were using for their logo and tagline was not particularly modern or engaging, and the inclusion of the word 'Cafe' in their branding felt unnecessary and outdated.",

								" After conducting some research, I realized that they were much more than just a cafe. They offer a variety of entrees and can be considered a full-service restaurant. This led me to update their branding to better reflect this. I decided to use a clean sans-serif font for the logo and tagline, and dropped the 'Cafe' from their branding altogether.",

								"In order to make the logo feel more in line with the other restaurants in the area, I gave it a more modern, sleek design. I also incorporated their 'Come. Sit. Stay.' branding from their website into the logo, as it directly invites customers in and adds a friendly, welcoming touch. For the color palette, I chose bright, saturated colors that still maintained the 'foody' and 'natural' vibes with orange and green.",

								'Overall, my goal was to create a modern, cohesive brand for Dog Lane that accurately reflected their offerings as a full-service restaurant. I believe that the updated branding will help them stand out in their college town and attract a wider range of customers.'
							],
							image: {
								src: '/projectassets/doglane/4square.png',
								alt: 'Dog Lane branding'
							}
						}
					]
				}
			]
		}
	]
};

export default dogLane;
