import { ReactNode } from 'react';

export type TBlockProps = {
	id: string | number;
	title: string;
	items: string[] | ReactNode[];
};

export type TButtonProps = {
	title: string;
	onClick: () => void;
	isOpen?: boolean;
};

export type TItem = {
	id: string;
	title: string;
};

export type TObjectType = {
	id: string;
	title: string;
	icon: any;
};

export type TPanel = {
	title: string;
	list: TItem[];
};
