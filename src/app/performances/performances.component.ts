import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PerformanceInterface, ShowPerf } from '../models/performance';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {
  performances: ShowPerf[] = [];
  panelOpenState = false;
  selectedIndex = 0;
  color: ThemePalette= 'primary';


  constructor(
    private dataService: DataService
  ) { }

 
  ngOnInit(): void {
    this.dataService.getPerformances().subscribe(res => this.getShowPerfs(res))
  }
  getShowPerfs(performances: PerformanceInterface[]){
    performances.forEach(performance => this.dataService.getShow(performance.showId).subscribe(show => {
      // Add show to Performance
      const showPerf: ShowPerf = {
        id: performance.id,
        showTime: performance.showTime,
        show: show
      }
      this.performances.push(showPerf)
    }
    ))
  }
  receiveBuyClick($event: number) {
    this.selectedIndex = $event;
  }
}
