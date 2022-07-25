export interface SavedCloud {
	id: string;
	name: string;
	ts: number;
	wordArray: { text: string; size: number }[];
}
