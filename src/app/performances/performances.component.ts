import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PerformanceInterface, ShowPerf } from '../models/performance';
import { Venue } from '../models/venue';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {
  performances: ShowPerf[] = [];
  panelOpenState = false;
  color: ThemePalette= 'primary';


  constructor(
    private dataService: DataService
  ) { }

 
  ngOnInit(): void {
    this.dataService.getPerformances().subscribe(res => this.getShowPerfs(res))
  }
  getShowPerfs(performances: PerformanceInterface[]){
    performances.forEach(performance => this.dataService.getShow(performance.showId).subscribe(show => {
      
      // Get Show's Venue
      this.dataService.getVenue(show.venueId).subscribe(showVenue => show.venue = showVenue);

      // Add show to Performance
      const showPerf: ShowPerf = {
        showTime: performance.showTime,
        show: show
      }
      this.performances.push(showPerf)
    }
    ))
  }

}
