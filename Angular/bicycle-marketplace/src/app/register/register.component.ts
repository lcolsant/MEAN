import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name:"",
    email:"",
    password:"",

  }

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }

  register(){
    console.log('registration successful...');
    this.router.navigateByUrl('browse');

  }
}
