import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempChartComponent } from './temp/temp-chart/temp-chart.component';
import { TempInfoComponent } from './temp/temp-info/temp-info.component';
import { TempNowComponent } from './temp/temp-now/temp-now.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [TempChartComponent, TempInfoComponent, TempNowComponent, TempComponent],
  imports: [
    CommonModule,
  ]
})
export class TempModule { }
