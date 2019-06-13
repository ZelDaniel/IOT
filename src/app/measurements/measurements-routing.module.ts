
import { Routes, RouterModule } from '@angular/router';
import { TempComponent} from './temp/temp.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path : 'measurements', children : [
  {
  path : 'temperature', component : TempComponent
  }
 ]},
  {
  path : 'measurements', redirectTo : 'measurements/temperature' , pathMatch : 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementsRoutingModule { }
