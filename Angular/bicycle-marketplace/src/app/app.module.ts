//import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';

//import components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BicycleListComponent } from './bicycle-list/bicycle-list.component';
import { BicycleModifyComponent } from './bicycle-modify/bicycle-modify.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';

//import services
import { BicycleService } from './bicycle.service';
import { AuthService } from './auth.service';

//import guards and pipes
import { AuthGuard } from './auth.guard';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BicycleListComponent,
    BicycleModifyComponent,
    HomeComponent,
    SearchPipe,
    LandingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),

  ],
  providers: [BicycleService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
