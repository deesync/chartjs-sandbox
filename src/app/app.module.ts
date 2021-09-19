import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartLineComponent } from './components/chart-line/chart-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartLineComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
