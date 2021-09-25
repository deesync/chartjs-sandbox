import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { DatasetComponent } from './components/dataset/dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DatasetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
