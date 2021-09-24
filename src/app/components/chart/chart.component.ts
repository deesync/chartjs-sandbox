import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

import { FirefetchService } from '@service/firefetch.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private firefetchService: FirefetchService) { }

  @Input('type') 
  public chartType: ChartType = 'bar';
  public chartData: ChartConfiguration['data'];
  public chartOptions: ChartConfiguration['options'];

  ngOnInit(): void {
    this.firefetchService.data.subscribe(
      action => this.chartData = action.payload.val()
    );
    this.firefetchService.options.subscribe(
      action => this.chartOptions = action.payload.val()
    );
  }

}
