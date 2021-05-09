import { Venue } from "./venue";

export interface Show {
    id: number;
    name: string;
    description: string;
    venueId: number;
}