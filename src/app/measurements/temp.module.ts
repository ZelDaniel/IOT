import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempChartComponent } from './temp/temp-chart/temp-chart.component';
import { TempInfoComponent } from './temp/temp-info/temp-info.component';
import { TempNowComponent } from './temp/temp-now/temp-now.component';

@NgModule({
  declarations: [TempChartComponent, TempInfoComponent, TempNowComponent],
  imports: [
    CommonModule,
  ]
})
export class TempModule { }
