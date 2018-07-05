import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
// import { Subscription } from 'rxjs';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes:Array<Note> = [];


  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log('received from api',this.notes);
    })

  }

  // onDelete(note:Note){
  //   const idx = this.notes.indexOf(note);
  //   this.noteService.deleteNote(idx);
  // }
}
