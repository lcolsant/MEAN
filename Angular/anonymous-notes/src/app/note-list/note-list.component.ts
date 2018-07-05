import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes:Array<Note> = [];


  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.notesObservable.subscribe( (notes)=>{
      this.notes = notes;
    })
  }

  onDelete(note:Note){
    const idx = this.notes.indexOf(note);
    this.noteService.deleteNote(idx);
  }
}
