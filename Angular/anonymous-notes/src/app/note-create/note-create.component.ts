import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  @Output() emitNote = new EventEmitter();

  newNote:Note = new Note();
  notes:Array<Note> = [];

  constructor(
    private noteService:NoteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newNote = new Note();
    this.noteService.getNotes();

  }

  onSubmit(event:Event, formData:NgForm){

    event.preventDefault();

    console.log('note submitted');
    this.emitNote.emit(this.newNote);

    this.noteService.addNote(this.newNote).subscribe(note=>{
      this.notes.push(note);
      this.noteService.getNotes();
    });

    console.log(this.notes);
    this.newNote = new Note();

    //refresh form
    formData.reset();

  }

}
