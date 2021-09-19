import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

import { FirefetchService } from '@service/firefetch.service';


@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {

  constructor(private firefetchService: FirefetchService) { }

  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'];
  public lineChartOptions: ChartConfiguration['options'];

  data = this.firefetchService.data;
  options = this.firefetchService.options;

  ngOnInit(): void {
    this.data.subscribe(action => this.lineChartData = action.payload.val());
    this.options.subscribe(action => this.lineChartOptions = action.payload.val());
  }

}
