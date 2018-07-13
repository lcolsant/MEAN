import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BicycleModifyComponent} from './bicycle-modify/bicycle-modify.component';
import { LandingComponent} from './landing/landing.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
   },
  {
    path: 'browse',
    component: LandingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listings',
    component: BicycleModifyComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
