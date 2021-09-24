import { Component, OnInit } from '@angular/core';

import { FirefetchService } from '@service/firefetch.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  constructor(private firefetchService: FirefetchService) { }

  public dataset: number = 0;

  public data: any = {};
  
  ngOnInit(): void {
    this.firefetchService.data.subscribe(
      action => this.data = action.payload.val()
    ); 
  }

}
