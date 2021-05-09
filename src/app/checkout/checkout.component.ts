import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { DataService } from '../services/data.service'
import { ActivatedRoute } from '@angular/router';
import { Level } from '../models/levels';
import { Customer } from '../models/customers';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customer: Customer;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
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
    email: this.emailControl,
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    address: this.addressControl
  });
  level: Level;

  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const levelId = JSON.parse(params.levelId);
      this.dataService.getLevel(levelId).subscribe(level => this.level = level)
    });
  }
  Submit(){
    const value = this.myForm.value
    this.customer = {
      firstName: value.firstName,
      lastName: value.lastName,
      address: value.address,
      email: value.email
    };
    this.dataService.postCustomer(this.customer).subscribe(customer => this.customer.id = customer.id);
  }
}
