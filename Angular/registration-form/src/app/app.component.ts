import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //instantiate new user object
  user = new User();

  //declare variables that will capture and store last user data
  user_name: string = "";
  user_email: string = "";

  onSubmit(event: Event, formData: NgForm){
    //prevent page from refreshing after form submit
    event.preventDefault();
    console.log('form submitted');
    console.log(this.user);

    //store user data to be passed back to form for success message
    this.user_name = this.user.fname;
    this.user_email = this.user.email;

    //refresh form
    formData.reset();
  };

}
