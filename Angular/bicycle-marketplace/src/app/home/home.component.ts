import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user = {
  //   name:"",
  //   password:"",

  // }
  constructor(
    // private router: Router,
  ) { }

  ngOnInit() {
  }

  // login(){
  //   console.log('log in successful...');
  //   this.router.navigateByUrl('browse');
  // }

  // register(){
  //   console.log('register successful...');
  //   this.router.navigateByUrl('browse');

  // }

}
