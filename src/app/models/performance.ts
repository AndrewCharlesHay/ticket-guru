import { Show } from "./shows";

export interface PerformanceInterface {
    id: number;
    showTime: Date;
    showId: number;
}
export interface ShowPerf {
    id: number;
    showTime: Date;
    show: Show
}