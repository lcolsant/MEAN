import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  username:string = "";
  score:number = 0;
  userExists:boolean = false;

  constructor(private _taskService: TaskService){}

  //subscribes to task service and provides callback functions
  ngOnInit(){
    this._taskService.tasks.subscribe(
      tasks => {
        this.data = tasks;
        console.log(`data received: ${this.data}`);
        this.score = this.data['public_repos']+this.data['followers'];
        this.userExists = true;
      },
      error => {   ////////////error handling not working!! /////////////////////
        console.log('error found');
        this.userExists = false;
      }
    );
  }

  //pass username retrieved from form to task service gitData function
  sendData(formData: NgForm, event: Event){
    event.preventDefault();
    this._taskService.gitData(this.username);
    formData.reset();
  }
}
