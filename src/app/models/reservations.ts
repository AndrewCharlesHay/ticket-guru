import { Customer } from "./customers";
import { Seats } from "./seats";

export interface Reservation {
  performanceId: number,
  customer: {
    id: number
  },
  seatRequests: SeatRequest[]
}
export interface SeatRequest {
    level: {
        id: number
    },
    numSeats: number
}
export interface confirmedReservation {
    id: number,
    reservationName: string,
    expirationDate: Date,
    reservationConfirmed: boolean,
    customerId: 0,
    customer: Customer,
    seats: Seats[]
}