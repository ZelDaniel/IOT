import {Component, Input, OnChanges, OnInit, SimpleChange,
SimpleChanges} from '@angular/core';
import { precisionRound } from 'src/shared/functions';

@Component({
selector: 'app-temp-info',
templateUrl: './temp-info.component.html',
})
export class TempInfoComponent implements OnChanges {

@Input() measurements;
maxTemp: number = null;
minTemp: number = null;
dsTemp: number;
sum: number;
ngOnChanges(changes: SimpleChanges): void {
  const measurements: SimpleChange = changes.measurements;
  if (measurements.previousValue !== measurements.currentValue) {
  const now = new Date();
  const yesterday = now.setDate(now.getDate() - 1);
  let itemCounter = 0;
  this.dsTemp;
  this.sum = 0;
  measurements.currentValue.forEach(item => {
  const time = new Date((item.timestamp + 2 * 60) * 1000);

  if (this.maxTemp === null) {
  this.maxTemp = item.temperature;
  }
  if (this.minTemp === null) {
  this.minTemp = item.temperature;
  }
  itemCounter = itemCounter + 1;
  this.sum = this.sum + item.temperature;
  if (this.maxTemp < item.temperature) {
  this.maxTemp = item.temperature;
  }
  if (this.minTemp > item.temperature) {
  this.minTemp = item.temperature;
  }
  });
  this.dsTemp = this.precisionRound(this.sum / itemCounter, 1);
  }
}
precisionRound(number, precision) {
return precisionRound(number, precision);
}
}

