export interface Skill {
	name: string;
	percentage: number;
	description: string;
}

export interface PortfolioSettings {
	title: string;
	description: string;
	name: string;
	skills: Skill[];
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	thumbnail?: string; // Optional if not all posts have a thumbnail
	featured?: boolean;
}
