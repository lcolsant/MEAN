import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { ReviewRestComponent } from './review-rest/review-rest.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { AddReviewComponent } from './add-review/add-review.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'restaurants'
   },
  {
    path: 'restaurants',
    children: [
      {
        path: '',
        // pathMatch:'full',
        component: HomeComponent,
      },
      {
        path: 'new',
        component: NewRestComponent,
      },
      {
        path: ':id',
        component: ReviewRestComponent,
      },
      {
        path: ':id/review',
        component: AddReviewComponent,
      },
      {
        path: ':id/edit',
        component: EditRestComponent,
      },
    ]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
