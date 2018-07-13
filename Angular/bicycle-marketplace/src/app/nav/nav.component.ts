import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private readonly router: Router,


  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      console.log('user logged off successfully.');
      this.router.navigateByUrl('/');
    });
  }

}
