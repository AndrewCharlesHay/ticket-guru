import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  @Input() performanceId: number;
  displayedColumns = ['name', 'price', 'available', ''];

  seats: any = {}
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getSeatsByPerformance(2).subscribe(seat => this.seats = seat)
  }

}
