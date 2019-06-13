import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MeasurementsModule } from './measurements/measurements.module';
import { NgxLoadingModule } from 'ngx-loading';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TempComponent } from './measurements/temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp (environment.firebase),
    AngularFireDatabaseModule ,
    AngularFireAuthModule,
    MeasurementsModule ,
    NgxLoadingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
