import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Venue } from '../models/venue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  @Output() buyClickEvent = new EventEmitter<number>();
  @Input() venueId: number;
  venue: Venue;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getVenue(this.venueId).subscribe(res => this.venue = res)
  }
  onClick(): void{
    console.log("click")
    this.buyClickEvent.emit(1);
  }
}
