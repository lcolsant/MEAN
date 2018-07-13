import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  // user = {
  //   email:"",
  //   password:"",

  // }

  constructor(
    private router: Router,
    private auth: AuthService,

  ) { }

  ngOnInit() {
  }

  login(user:User){
    console.log('loggin in user...', user);

    this.auth.login(user).subscribe(user=>{
      console.log('from api...logged in successfully.',user);
      this.router.navigateByUrl('browse');

    })
  }

}
