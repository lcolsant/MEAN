import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { LandingComponent } from './landing/landing.component';


//controls routing to various city components
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dc', component: DcComponent },
  { path: 'seattle', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
