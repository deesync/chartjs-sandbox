import { Component, OnInit } from '@angular/core';

import { FirefetchService } from '@service/firefetch.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  constructor(private firefetchService: FirefetchService) { }

  public datasetId: number = 0;
  public data: any = {};

  public dataRef = this.firefetchService.dataRef;

  updateData() {
    this.dataRef.update(this.data);
  }

  removeNode(id: number) {
    const data = this.data;

    data.datasets.forEach(set => set.data.splice(id, 1));
    data.labels.splice(id, 1);

    this.updateData();
  }

  // should be a separate component
  public nodeModel: {name: string, value: number} = {name: 'August', value: 50};

  addNode() {
    let len = this.data.datasets[this.datasetId].data.push(this.nodeModel.value);
    this.data.labels[len-1] = this.nodeModel.name;

    this.updateData();
  }

  ngOnInit(): void {
    this.firefetchService.data.subscribe(
      action => this.data = action.payload.val()
    );
  }

}
