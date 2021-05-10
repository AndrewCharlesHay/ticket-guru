import { Customer } from "./customers";
import { Seats } from "./seats";

export interface Reservation {
  performanceId: string,
  customer: {
    id: string
  },
  seatRequests: SeatRequest[]
}
export interface SeatRequest {
    level: {
        id: string
    },
    numSeats: string
}
export interface confirmedReservation {
    id: number,
    reservationName: string,
    expirationDate: Date,
    reservationConfirmed: boolean,
    customerId: string,
    customer: Customer,
    seats: Seats[]
}