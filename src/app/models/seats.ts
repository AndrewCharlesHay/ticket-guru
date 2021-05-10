import { Level } from "./levels";
import { PerformanceInterface } from './performance'

export interface Seats {
    performance: PerformanceInterface,
    level: Level,
    row: number,
    seatNumber: number
}