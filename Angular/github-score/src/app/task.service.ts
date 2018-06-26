import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  errors: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  //takes git username as parameter and returns data/error from api depending on
  //valid username or not. Subscribe method calls on handleData function if valid
  //and handleErrors if not valid.
  gitData(username:string){
    this._http.get(`https://api.github.com/users/${username}`)
    .subscribe(
      data => this.handleData(data as any),
      errors => this.handleErrors(errors as any));
  }

  //called if data returned from api is valid
  handleData(data: any[]){
    this.tasks.next(data);  //success path
  }

  //called if api returns an error object
  handleErrors(error: string[]){
    this.errors.next(error); //error path
  }
}
