export interface Project {
	hidden: boolean;
	key: string;
	projectType: 'design' | 'dev' | 'both' | 'other';
	name: string;
	subtitle: string;
	link?: [string, string];
	backgroundColor: string;
	vantaColor?: string;
	textColor?: string;
	role: string;
	skills: string;
	timeline: string;
	overview?: string[];
}
export const projects: Project[] = [
	{
		hidden: true,
		key: 'this',
		projectType: 'both',
		name: 'muellr.xyz',
		subtitle: 'Front End Development',
		link: ['/', 'Visit muellr.xyz'],
		backgroundColor: 'hsla(225, 20%, 72%, 10%)',
		role: 'Front End Engineer',
		timeline: 'Feb 2020 - May 2022',
		skills: 'Svelte, TailwindCSS'
	},
	{
		hidden: false,
		key: 'sourcery',
		projectType: 'both',
		name: 'Sourcery',
		subtitle: 'UX Design',
		link: ['https://sourceryapp.org', 'Visit Sourcery'],
		backgroundColor: 'hsl(256, 35%, 47%, 40%)',
		vantaColor: '#644ea2',
		textColor: 'hsl(261, 67%, 91%)',
		role: 'UX Engineer',
		timeline: 'Feb 2020 - May 2022',
		skills: 'Figma, Vue, Nuxt',
		overview: [
			"Sourcery is a not-for-profit service that gives researchers access to documents that can't be found online by paying other researchers to find them. It aims to streamline the process that researchers go through by providing one simple platform that works at any collecting institution in our service area (currently New York City, Boston, and Storrs)."
		]
	},
	{
		hidden: false,
		key: 'charlesvr',
		projectType: 'dev',
		name: 'CharlesVR',
		subtitle: 'Front End Development',
		link: ['https://greenhousestudios.github.io/charlesvr/chapter/1.html', 'Visit CharlesVR'],
		backgroundColor: 'hsl(340, 56%, 56%, 25%)',
		vantaColor: '#661c34',
		role: 'Lead Developer',
		timeline: 'Feb 2020 - May 2022',
		skills: 'Svelte, TailwindCSS',
		overview: [
			'Charles V|R is a virtual reality reconstruction of the coronation of Holy Roman Emperor Charles V in Bologna, Italy, in February of 1530. It is a recreation of the sights and sounds of this religious and political ceremony using contemporaneous accounts, artwork, and music as source material. '
		]
	},
	{
		hidden: false,
		key: 'doglane',
		projectType: 'design',
		name: 'Dog Lane Café',
		subtitle: 'Branding',
		link: ['https://www.behance.net/gallery/96296037/Dog-Lane-UX-Exploration', 'View Case Study'],
		backgroundColor: 'hsla(14,97%,65%, 30%)',
		vantaColor: 'hsl(14,67%,45%)',
		role: 'Branding Designer',
		timeline: 'Feb 2020',
		skills: 'Adobe Illustrator, Figma'
	},
	{
		hidden: false,
		key: 'leisurely',
		projectType: 'design',
		name: 'Leisurely',
		subtitle: 'UI Design',
		backgroundColor: '#FFFFFF32',
		vantaColor: '#555',
		textColor: '#fff',
		role: 'UI Designer',
		timeline: 'Mar 2021',
		skills: 'Figma',
		link: [
			'https://www.figma.com/proto/3hZxdIKmSWdHoEKCBFbbNv/Leisurely-Prototype?page-id=0%3A1&node-id=801%3A1580&viewport=482%2C652%2C0.19&scaling=contain&starting-point-node-id=4%3A2239',
			'View Prototype'
		]
	},
	{
		hidden: false,
		key: 'tondo',
		projectType: 'design',
		name: 'Tondo',
		subtitle: 'Iconography',
		backgroundColor: 'hsla(217, 89%, 64%, 30%)',
		vantaColor: '#264475',
		textColor: 'hsl(47, 100%, 69%)',
		role: 'Iconography',
		timeline: 'November 2015',
		skills: 'Adobe Illustrator, Figma'
		// link: ['https://www.figma.com/file/Z2jiLu1etSYHdHKEpVrIXi?node-id=0:1', 'See all icons']
	},
	{
		hidden: true,
		key: 'acme',
		projectType: 'design',
		name: 'ACME',
		subtitle: 'Design System',
		backgroundColor: 'hsla(0, 100%, 50%, 10%)',
		textColor: 'hsl(0, 100%, 100%)',
		role: 'Design System',
		timeline: 'May - Aug 2018',
		skills: 'Sketch'
	},
	{
		hidden: true,
		key: 'follow',
		projectType: 'design',
		name: 'Follow',
		subtitle: 'UI Design',
		backgroundColor: 'hsla(228, 83%, 60%, 10%)',
		textColor: 'white',
		role: 'UI Designer',
		timeline: 'Feb - May 2019',
		skills: 'Figma'
	}
];
