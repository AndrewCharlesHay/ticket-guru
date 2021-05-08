import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Show } from '../models/shows'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getShows().subscribe(res => this.shows = res)
  }

}
