import { Component } from '@angular/core';
import { Note } from './note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myNotes:Array<Note> = [];

  dataFromChild(note){
    // this.myNotes.push(note);
    console.log('in app component',note);
    this.myNotes.push(note);
    console.log('in app component myNotes:',this.myNotes);
  }

}
