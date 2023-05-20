export type ProjectElement = {
	id: {
		timestamp: number;
		date: string;
	};
	title: string;
	status: number;
	completedDate: string;
	description: string;
	repo: string;
	url: string;
	technology: [string];
	image: string;
};

export type ProjectType = ProjectElement[];
