export type ContactType = ContactElement[];

type ContactElement = {
	id: {
		timestamp: number;
		date: string;
	};
	email: string;
	linkedin: string;
	github: string;
	resume: string;
	emailLink: string;
};
