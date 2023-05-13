export type AboutType = AboutElement[];

type AboutElement = {
	id: {
		timestamp: number;
		date: string;
	};
	headshot: string;
};
