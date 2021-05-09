import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerformanceInterface } from '../models/performance';
import { Show } from '../models/shows';
import { Observable } from 'rxjs';
import { Venue } from '../models/venue';
import { Level } from '../models/levels';
import { Customer } from '../models/customers';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://ec2-54-159-33-6.compute-1.amazonaws.com:5005/ticket-guru/api'

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<any> {
    const url = `${this.baseUrl}/customers`
    const res = this.http.get(url);
    return res;
  }
  getShows(): Observable<Show[]> {
    const url = `${this.baseUrl}/shows`;
    return this.http.get<Show[]>(url);
  }
  getPerformances(): Observable<PerformanceInterface[]> {
    const url = `${this.baseUrl}/performances`;
    return this.http.get<PerformanceInterface[]>(url);
  }
  getShow(showId: number): Observable<Show> {
    const url = `${this.baseUrl}/shows/${showId}`;
    return this.http.get<Show>(url);
  }
  getVenue(venueId: number): Observable<Venue> {
    const url = `${this.baseUrl}/venues/${venueId}`
    return this.http.get<Venue>(url);
  }
  getSeatsByPerformance(performanceId: number){
    const url = `${this.baseUrl}/performances/${performanceId}/availability`
    return this.http.get(url);
  }
  getLevel(levelId: number): Observable<Level> {
    const url = `${this.baseUrl}/levels/${levelId}`;
    return this.http.get<Level>(url);
  }
  postCustomer(customer: Customer): Observable<any> {
    const url = `${this.baseUrl}/customers`;
    return this.http.post<any>(url, customer);
  }
}
