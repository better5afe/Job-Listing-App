export interface BadgeProps {
	text: string;
	className?: string;
}

export interface KeywordTileProps {
	keyword: string;
	className?: string;
}

export interface FilterTileProps {
	text: string;
	id: string;
	onDeleteKeyword: () => void;
}

export interface WrapperProps {
	children: React.ReactNode;
	className?: string;
}

export interface JobCardProps {
	id: number;
	img: any;
	company: string;
	isNew: boolean;
	isFeatured: boolean;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	keywords: string[];
}

export interface JobObject {
	company: string;
	contract: string;
	featured: boolean;
	id: number;
	languages: string[];
	level: string;
	location: string;
	logo: string;
	new: boolean;
	position: string;
	postedAt: string;
	role: string;
}

export interface ActionInterface {
	type: string;
	payload?: any;
}

export interface StateInterface {
	list: JobObject[];
}
