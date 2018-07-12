import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { NgForm } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  registrationErrors: string[] = [];

  // user = {
  //   name:"",
  //   email:"",
  //   password:"",

  // }

  constructor(
    private router: Router,
    private auth: AuthService,


  ) { }

  ngOnInit() {
  }

  register(user: User){
    console.log('registering user...', user);
    event.preventDefault();

    this.auth.register(user).subscribe(()=>{
      console.log('registration successful...');
      this.router.navigateByUrl('browse');
    });

  }
}
