export interface BadgeProps {
	text: string;
	className?: string;
}

export interface KeywordTileProps {
	keyword: string;
}

export interface WrapperProps {
	children: React.ReactNode;
	className?: string;
	ref?: any;
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
