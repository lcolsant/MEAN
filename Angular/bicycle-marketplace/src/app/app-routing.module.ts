import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BicycleListComponent} from './bicycle-list/bicycle-list.component';
import { BicycleModifyComponent} from './bicycle-modify/bicycle-modify.component';
// import { RegisterComponent } from './register/register.component'
// import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
   },
  {
    path: 'browse',
    component: BicycleListComponent,
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
