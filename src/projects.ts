export interface Project {
	hidden: boolean;
	key: string;
	projectType: 'design' | 'dev' | 'both' | 'other';
	name: string;
	subtitle: string;
	link?: [string, string];
	backgroundColor: string;
	textColor?: string;
	role: string;
	skills: string;
	timeline: string;
	overview?: string[];
}
export const projects: Project[] = [
	{
		hidden: false,
		key: 'this',
		projectType: 'both',
		name: 'muellr.xyz',
		subtitle: 'Front End Development',
		link: ['/', 'Visit muellr.xyz'],
		backgroundColor: 'hsl(225, 30%, 15%)',
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
		backgroundColor: 'hsl(256, 35%, 47%)',
		role: 'UX Engineer',
		timeline: 'Feb 2020 - May 2022',
		skills: 'Figma, Nuxt, Vue, Vuetify',
		overview: [
			"Sourcery is a not-for-profit service that gives researchers access to documents that can't be found online by paying other researchers to find them. It aims to streamline the process that researchers go through by providing one simple platform that works at any collecting institution in our service area (currently New York City, Boston, and Storrs)."
		]
	},
	{
		hidden: false,
		key: 'charlesvr',
		projectType: 'dev',
		name: 'CharlesV|R',
		subtitle: 'Front End Development',
		link: ['https://greenhousestudios.github.io/charlesvr/chapter/1.html', 'Visit CharlesVR'],
		backgroundColor: 'hsl(340, 56%, 16%)',
		role: 'Front End Engineer',
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
		name: 'Dog Lane Cafe',
		subtitle: 'Branding',
		link: ['https://www.behance.net/gallery/96296037/Dog-Lane-UX-Exploration', 'Visit Dog Lane'],
		backgroundColor: 'hsl(14, 92%, 65%)',
		textColor: 'hsl(14, 100%, 16%)',
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
		backgroundColor: '#FFF',
		textColor: '#000',
		role: 'UI Designer',
		timeline: 'Feb 2020',
		skills: 'Figma'
	},
	{
		hidden: false,
		key: 'tondo',
		projectType: 'design',
		name: 'Tondo',
		subtitle: 'Icongraphy',
		backgroundColor: 'hsl(46, 100%, 50%)',
		textColor: 'hsl(15, 100%, 25%)',
		role: 'Icongraphy',
		timeline: 'November 2015',
		skills: 'Adobe Illustrator, Figma'
	}
];
