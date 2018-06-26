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
  error: string[] = [];
  username:string = "";
  score:number = 0;
  userExists:boolean = false;

  constructor(private _taskService: TaskService){}

  //subscribes to task service and provides callback functions
  ngOnInit(){

    //subscribe to success route behavior handler
    this._taskService.tasks.subscribe(
      tasks => {
        this.data = tasks;
        console.log(`data received: ${this.data}`);
        this.score = this.data['public_repos']+this.data['followers'];
        this.userExists = true;
      },
    );

    //subscribe to error route behavior handler
    this._taskService.errors.subscribe(
      errors => {
        this.error = errors;
        this.userExists = false;
        console.log('user does not exists');
      },
    );
  }

  //pass username retrieved from form to task service gitData function
  sendData(formData: NgForm, event: Event){
    event.preventDefault();
    this._taskService.gitData(this.username);
    formData.reset();
  }
}
