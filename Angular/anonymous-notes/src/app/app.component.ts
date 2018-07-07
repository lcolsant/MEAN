import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myNotes:Array<Note> = [];

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.myNotes = notes;
      console.log('Getting notes....received from api',this.myNotes);
    })

  }

  getNotes(){
    this.noteService.getNotes().subscribe(notes => {
      this.myNotes = notes;
    })
  }

  deleteNote(note){

    this.noteService.deleteNote(note).subscribe(notes=>{
      console.log('deleted note:', notes);

      this.noteService.getNotes().subscribe(notes =>{
        this.myNotes = notes;
      });

    });
  }

}
