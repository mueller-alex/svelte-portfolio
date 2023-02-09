export type Project = {
	id: string;
	info: ProjectInfo;
	meta: ProjectMeta;
	page: ProjectPage;
};

export type ProjectMeta = {
	backgroundColor: string;
	vantaColor: string;
	textColor?: string;
	hidden?: boolean;
};

export type ProjectInfo = {
	name: string;
	subtitle: string;
	role: string;
	timeline: string;
	tools: string;
	overview: string[];
	link?: [string, string];
};

export interface Node {
	key: string;
	content: Array<any>;
}

export type TextNode = Node & {
	key: 'text';
	content: string[];
};

export type Image = {
	src: string;
	alt: string;
};

export type ImageNode = Node & {
	key: 'image';
	caption?: string;
	grid?: boolean;
	content: Image[];
};

export type TextImage = {
	paragraphs: string[];
	image: Image;
};

export type TextImageNode = Node & {
	key: 'text-image';
	content: TextImage[];
};

export type IFrame = {
	src: string;
	title: string;
	allowFullScreen?: boolean;
};

export type IFrameNode = Node & {
	key: 'iframe';
	content: IFrame[];
	caption?: string;
};

export type Link = {
	url: string;
	text: string;
	rotate?: boolean;
	icon?: string;
	href?: string;
	underline?: boolean;
	target?: string;
};

export type LinkNode = Node & {
	key: 'link';
	content: Link[];
};

export type Section = {
	title: string;
	nodes: Array<TextNode | ImageNode | TextImageNode | IFrameNode | LinkNode>;
};

export type ProjectPage = Array<Section>;
