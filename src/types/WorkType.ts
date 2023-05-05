export type WorkElement = {
	id: {
		timestamp: number;
		date: string;
	};
	role: string;
	company: string;
	startDate: string;
	endDate: string;
	description: [string];
	technology: [string];
	location: string;
};

export type WorkType = WorkElement[];
