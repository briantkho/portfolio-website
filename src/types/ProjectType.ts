export type ProjectElement = {
	id: {
		timestamp: number;
		date: string;
	};
	title: string;
	status: number;
	description: string;
	technology: [string];
	image: string;
};

export type ProjectType = ProjectElement[];
