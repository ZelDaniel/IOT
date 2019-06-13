
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path : 'dashboard', component : DashboardComponent },
  { path : '', redirectTo : '/dashboard', pathMatch : 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
