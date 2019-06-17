import { Component , Input } from '@angular/core';
import { precisionRound, formatDate } from 'src/shared/functions';


@Component ({
 selector : 'app-temp-now',
 templateUrl : './temp-now.component.html',
 styleUrls : ['./temp-now.component.css']
 })
 export class TempNowComponent {
 @Input () item;
 precisionRound(number, precision ) {
 return precisionRound ( number , precision );
 }

 formatDate( date ) {
 return formatDate ( date );
 }
 }

