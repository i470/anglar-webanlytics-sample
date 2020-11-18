import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { VisitorsComponent } from './visitors.component';
import { ChartModule } from 'angular2-chartjs';



import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  
} from '@nebular/theme';
import { VisitorBarChartComponent } from './visitor-bar-chart/visitor-bar-chart.component';





@NgModule({
  imports: [
    
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    ChartModule,
  ],
  declarations: [
    VisitorsComponent,
    VisitorBarChartComponent,
    
  ]
})
export class VisitorStatsModule { }
