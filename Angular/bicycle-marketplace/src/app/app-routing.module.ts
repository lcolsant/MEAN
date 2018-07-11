import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BicycleListComponent} from './bicycle-list/bicycle-list.component';
import { BicycleModifyComponent} from './bicycle-modify/bicycle-modify.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'browse', component: BicycleListComponent },
  { path: 'listings', component: BicycleModifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
