//import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { ReviewRestComponent } from './review-rest/review-rest.component';
import { AddReviewComponent } from './add-review/add-review.component'

//import services
import { RestaurantService } from './restaurant.service';
import { ReviewService } from './review.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewRestComponent,
    EditRestComponent,
    ReviewRestComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [RestaurantService,ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
