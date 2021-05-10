import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { DataService } from '../services/data.service'
import { ActivatedRoute } from '@angular/router';
import { Level } from '../models/levels';
import { Customer } from '../models/customers';
import { Reservation, SeatRequest } from '../models/reservations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  level: Level;
  levelId: number;
  customer: Customer;
  performanceId: number;
  reservationId: number;
  emailControl = new FormControl('', [
    Validators.required, Validators.email
  ]);
  seatsControl = new FormControl('', [
    Validators.required,
  ])
  firstNameControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
  ]);
  addressControl = new FormControl('', [
    Validators.required,
  ]);
  myForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    address: this.addressControl,
    email: this.emailControl,
    seats: this.seatsControl
  });

  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.levelId = JSON.parse(params.levelId);
      this.performanceId = JSON.parse(params.performanceId);
      this.dataService.getLevel(this.levelId).subscribe(level => this.level = level)
    });
  }
  Submit(){
    const value = this.myForm.value
    this.customer = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      address: value.address
    };
    this.dataService.postCustomer(this.customer).subscribe(customer => this.customer.id = customer.id);
    const seatRequest: SeatRequest = {
      level: {
        id: this.levelId
      },
      numSeats: value.seats
    }
    const reservation: Reservation = {
      performanceId: this.performanceId,
      seatRequests: [seatRequest],
      customer: {
        id: 0
      }
    }
    this.dataService.postReservation(reservation).subscribe(confirmedReservation => this.reservationId = confirmedReservation.id)
  }
}
