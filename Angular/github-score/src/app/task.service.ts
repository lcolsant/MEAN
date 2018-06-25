import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  errors: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  //task service accepts username as parameter and makes call to github api
  // gitData(username:string){
  //     this._http.get(`https://api.github.com/users/${username}`).subscribe(
  //     (task: any[]) => this.tasks.next(task),  //success path
  //     (error) => this.tasks.next(error),  //error path not working!!
  //   );
  // }


  gitData(username:string){
    this._http.get(`https://api.github.com/users/${username}`).subscribe(this.handleData, this.handleErrors);
  }

  handleData(data: any[]){
    this.errors.next(null);
    this.tasks.next(data);  //success path
  }

  handleErrors(error: any[]){
    this.errors.next(error); //error path
    this.tasks.next(null);
  }

}
