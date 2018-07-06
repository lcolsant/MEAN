import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
// import { Subscription } from 'rxjs';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() myNewNote;
  notes:Array<Note> = [];

  constructor(private noteService:NoteService) { }

  passingNote(eventData){
    console.log(eventData);
  }
  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log('received from api',this.notes);
    })

    // console.log(`testing myNewNote: ${this.myNewNote}`);
  }

  onDelete(note:Note){
    this.noteService.deleteNote(note).subscribe(notes=>{
      console.log('deleted note:', note);

      this.noteService.getNotes().subscribe(notes =>{
        this.notes = notes});

    });
  };
}
