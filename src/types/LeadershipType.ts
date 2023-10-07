export type LeadershipType = LeadershipElement[];

export type LeadershipElement = {
	id: {
		timestamp: number;
		date: string;
	};
	role: string;
	company: string;
	startDate: string;
	location: string;
	endDate: string;
	description: [string];
};
