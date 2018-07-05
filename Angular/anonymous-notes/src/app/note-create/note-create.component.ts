import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote:Note = new Note();
  notes:Array<Note> = [];

  constructor(
    private noteService:NoteService,
  ) { }

  ngOnInit() {
    this.newNote = new Note();
    this.noteService.getNotes();

  }

  onSubmit(event:Event, formData:NgForm){

    event.preventDefault();
    console.log('in add component', this.newNote.note)
    console.log('note submitted');
    this.noteService.addNote(this.newNote);
    this.newNote = new Note();

    //refresh form
    formData.reset();

  }

}
