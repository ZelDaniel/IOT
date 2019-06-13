

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { TempModule } from './temp.module';

@NgModule({
  declarations: [],
  imports: [
    TempModule,
    CommonModule,
    MeasurementsRoutingModule
  ],
  providers: [DataService]
})
export class MeasurementsModule { }


